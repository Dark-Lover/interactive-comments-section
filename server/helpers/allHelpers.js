//! Delete Item
exports.deleteItem = (arr, itemId) => {
  const newArr = arr.filter((el) => el.id !== itemId);
  return newArr;
};

//! To UPDATE
// This function Returns the Comment Or Reply to update
exports.toUpdate = (arr, id) => {
  let output = {};
  arr.comments.forEach((el) => {
    if (el.id === id) {
      output = { comment: el, reply: '' };
    } else if (el.id !== id) {
      el.replies.forEach((rep) => {
        if (rep.id === id) {
          output = { comment: el, reply: rep };
        }
      });
    }
  });

  return output;
};

//! Generate ID
// This function generate ID
exports.getId = (arr) => {
  let id = 0;
  arr.comments.forEach((el) => {
    id++;
    if (el.replies !== []) id += el.replies.length;
  });
  return id + 1;
};

//! TimePassed
exports.timePassed = () => {
  const timeDiff = Date.now() - process.env.DATE_START;
  const converter = 1000 * 3600 * 24;
  const val = timeDiff / converter;
  if (val > 365) return `More than ${Math.floor(val / 365)} years`;
  if (val > 30) return `More than ${Math.floor(val / 30)} Months`;
  if (val >= 7) return `More than ${Math.floor(val / 7)} Weeks`;
  if (val < 7 && val > 1) return `${Math.floor(val)} days ago`;
  if (val <= 1) return `Today`;
};
