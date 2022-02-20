const fs = require('fs');
const { timePassed } = require('../helpers/getTimePassed');
const { deleteItem } = require('../helpers/deleteItem');
const { getId } = require('../helpers/getId');
const { toUpdate } = require('../helpers/findCommentToUpdate');
// Getting Data
const comments = JSON.parse(
  fs.readFileSync(`${__dirname}/../modal/serverData.json`)
);

//? Controllers

//* Get all comments
exports.getAllComments = (req, res) => {
  console.log(req.reqTime);
  const commentsWrapper = Object.assign({
    message: 'Success',
    commentsCount: Object.keys(comments.comments).length,
    data: [comments],
  });
  res.status(200).json(commentsWrapper);
};

//* ADD a comment using Axios
exports.addComment = (req, res) => {
  const newList = comments;
  // const newId = Object.keys(comments.comments).length + 1;
  const newId = getId(comments);
  const createdAt = timePassed();
  const newComment = Object.assign(req.body, {
    id: newId,
    createdAt: createdAt,
    score: 0,
    replies: [],
    user: {
      image: {
        png: 'image-juliusomo.png',
        webp: 'image-juliusomo.webp',
      },
      username: 'juliusomo',
    },
  });
  newList.comments.push(newComment);
  fs.writeFile(
    `${__dirname}/../modal/serverData.json`,
    JSON.stringify(newList),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: { comment: newComment },
      });
    }
  );
};

//* Update a Comment
exports.updateComment = (req, res) => {
  // Get Update Text and Comment ID
  const newContent = req.body.data;
  const newList = comments;
  const myId = +req.params.id;
  // Get Comment or Reply to update
  const toUpdateIs = toUpdate(newList, myId);
  const { comment, reply } = toUpdateIs;
  if (reply !== '') {
    // Update a Reply
    const replyIndex = comment.replies.findIndex((rep) => rep.id === reply.id);
    comment.replies[replyIndex].content = newContent;
    const updatedComment = comment;
    // Remove old version of the Comment that has the reply
    const updatedList = deleteItem(newList.comments, comment.id);
    // Push the Updated Comment to the list of Comments
    updatedList.push(updatedComment);
    // Update the whole list of comments Inside the newList
    newList.comments = updatedList;
    // Replace the Old file with the new One
    fs.writeFile(
      `${__dirname}/../modal/serverData.json`,
      JSON.stringify(newList),
      (err) => {
        res.status(201).json({
          status: 'Update Success',
          data: { comment: updatedComment },
        });
      }
    );
  } else {
    //TODO:  Update a Comment
    comment.content = newContent;
  }
};
