const fs = require('fs');

// Getting Data
const comments = JSON.parse(
  fs.readFileSync(`${__dirname}/../modal/serverData.json`)
);

// Controllers
exports.getAllComments = (req, res) => {
  console.log(req.reqTime);
  const commentsWrapper = Object.assign({
    message: 'Success',
    commentsCount: Object.keys(comments).length,
    data: [comments],
  });
  res.status(200).json(commentsWrapper);
};
