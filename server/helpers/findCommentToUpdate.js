// This function Returns the Comment Or Reply to update
exports.toUpdate = (arr, id) => {
  let output = {};
  let highLevel = {};
  // highLevel = arr.comments.find((el) => el.id === id);
  // if (highLevel !== undefined)
  //   output = { comment: highLevel, reply: 'ntestiw osaf' };
  // else output = { comment: 'wallo', reply: 'its a reply' };

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
  //   arr.comments.forEach((el) => {
  //     id++;
  //     if (el.replies !== []) id += el.replies.length;
  //   });
  //   return id + 1;
};
