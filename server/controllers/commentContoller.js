const fs = require('fs');
const { timePassed } = require('../helpers/getTimePassed');
// Getting Data
const comments = JSON.parse(
  fs.readFileSync(`${__dirname}/../../src/nodeData.json`)
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

//? ADD a comment using Axios
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
    `${__dirname}/../../src/nodeData.json`,
    JSON.stringify(newList),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: { comment: newComment },
      });
    }
  );
};
//! Add a comment using FS
// exports.addComment = (req, res) => {
//   const newList = comments;
//   //Initialise a new Comment id,createdAt,score,replies ..
//   const newId = Object.keys(comments.comments).length + 1;
//   const createdAt = timePassed();
//   console.log(createdAt);
//   const newComment = Object.assign(req.body, {
//     id: newId,
//     createdAt: createdAt,
//     score: 0,
//     replies: [],
//   });

//   newList.comments.push(newComment);
//   fs.writeFile(
//     `${__dirname}/../../src/nodeData.json`,
//     JSON.stringify(newList),
//     (err) => {
//       res.status(201).json({
//         status: 'success',
//         data: { comment: newComment },
//       });
//     }
//   );
// };
