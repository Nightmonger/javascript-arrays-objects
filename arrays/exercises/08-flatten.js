/**
 * Task description: Write a method that turns a deep array into a plain array
 * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
 * Task complexity: 3 of 5
 * @param {Array} array - A deep array
 * @returns {Array}
 */
const flatten = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      array.splice(i, 1, ...array[i]);
    }
  }
  return array;
};

console.log(flatten([1, 2, [3, 4, [5]]]));
