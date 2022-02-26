const fs = require('fs');
// prettier-ignore
const { timePassed,deleteItem,getId,toUpdate, } = require('../helpers/allHelpers');

// Getting Data
const comments = JSON.parse(
  fs.readFileSync(`${__dirname}/../modal/serverData.json`)
);

//? Controllers

//* Get all comments
exports.getAllComments = (req, res) => {
  const commentsWrapper = Object.assign({
    message: 'Success',
    commentsCount: Object.keys(comments.comments).length,
    data: [comments],
  });
  res.status(200).json(commentsWrapper);
};

//! ADD
//* ADD a comment using Axios
exports.addComment = (req, res) => {
  const newList = comments;
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
        status: 'Add Success',
        data: { comment: newComment },
      });
    }
  );
};

//* AddReply
exports.addReply = (req, res) => {
  const newList = comments;
  const replyToId = +req.params.id;
  const newId = getId(comments);
  const createdAt = timePassed();
  const commentInfo = toUpdate(newList, replyToId);

  const newComment = Object.assign(req.body.data, {
    id: newId,
    createdAt: createdAt,
    score: 0,
    replyingTo: commentInfo.comment.user.username,
    user: {
      image: {
        png: 'image-juliusomo.png',
        webp: 'image-juliusomo.webp',
      },
      username: 'juliusomo',
    },
  });
  commentInfo.comment.replies.push(newComment);

  const updatedComment = commentInfo.comment;
  // Remove old version of the Comment
  const updatedList = deleteItem(newList.comments, commentInfo.comment.id);
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
};

//! UPDATE
//* Update a Reply, then a Comment
exports.updateComment = (req, res) => {
  // Get Update Text and Comment ID
  const newContent = req.body.data;
  const newList = comments;
  const myId = +req.params.id;
  // Get Comment or Reply to update
  const toUpdateIs = toUpdate(newList, myId);
  const { comment, reply } = toUpdateIs;
  if (reply !== '') {
    //! Update a Reply
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
    //! Update a Comment
    comment.content = newContent;
    const updatedComment = comment;
    const updatedList = deleteItem(newList.comments, comment.id);
    updatedList.push(updatedComment);
    newList.comments = updatedList;
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
  }
};

//! Remove Comment
exports.removeComment = (req, res) => {
  const newList = comments;
  const myId = +req.params.id;
  const toUpdateIs = toUpdate(newList, myId);
  const { comment, reply } = toUpdateIs;
  if (reply !== '') {
    //! Delete a Reply
    // delete reply
    const updatedReplies = deleteItem(comment.replies, reply.id);
    // update Replies
    comment.replies = updatedReplies;
    // Update Comment
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
          status: 'Delete Reply Success',
          data: { deleted_comment: reply },
        });
      }
    );
  } else {
    //! Delete comment
    const updatedList = deleteItem(newList.comments, comment.id);
    newList.comments = updatedList;
    fs.writeFile(
      `${__dirname}/../modal/serverData.json`,
      JSON.stringify(newList),
      (err) => {
        res.status(201).json({
          status: 'Delete Comment Success',
          data: { deleted_comment: comment },
        });
      }
    );
  }
};
