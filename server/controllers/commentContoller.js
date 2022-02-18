const fs = require('fs');
const { timePassed } = require('../helpers/getTimePassed');
const { deleteItem } = require('../helpers/deleteItem');
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
  const newId = Object.keys(comments.comments).length + 1;
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
  const newContent = req.body.data;
  const newList = comments.comments;
  const myId = +req.params.id;
  console.log(typeof myId);
  const comToUp = newList.find((el) => el.id === myId);
  comToUp.content = newContent;
  console.log(comToUp);
  console.log('#######################################');
  console.log(newList);
  comments.comments = newList;
  fs.writeFile(
    `${__dirname}/../modal/serverData.json`,
    JSON.stringify(comments),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: { comment: comToUp },
      });
    }
  );
};
