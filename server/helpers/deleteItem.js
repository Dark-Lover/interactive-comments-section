exports.deleteItem = (arr, itemId) => {
  const newArr = arr.filter((el) => el.id !== itemId);
  return newArr;
};
