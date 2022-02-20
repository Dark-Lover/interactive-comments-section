// This function generate ID
exports.getId = (arr) => {
  let id = 0;
  arr.comments.forEach((el) => {
    id++;
    if (el.replies !== []) id += el.replies.length;
  });
  return id + 1;
};
