testArray = [1, 2, 3, 1, 5, 6, 1, 2, 5];

/**
 * @param {Array} array
 * @returns {Array}
 */
const getDuplicatesOrEmptyArray3 = function (array) {
  const newArray = [];
  array.forEach((element) => {
    if (newArray.includes(element)) {
      return;
    }
    if (array.indexOf(element) !== array.lastIndexOf(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};
console.log(getDuplicatesOrEmptyArray3(testArray));
