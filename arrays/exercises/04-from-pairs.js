/**
 * Task description: Write a method that returns an object composed of key-value pairs.
 * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
 * Task Complexity: 2 of 5
 * @param {Array} array - a deep array of pairs
 * @returns {Array}
 */
const fromPairs = (array) => {
  let objectToReturn = {};
  for (let i = 0; i < array.length; ++i) {
    const [key, value] = array[i];
    objectToReturn[key] = value;
  }
  return objectToReturn;
};

console.log(
  fromPairs([
    ["a", 1],
    ["b", 2],
  ]),
);
