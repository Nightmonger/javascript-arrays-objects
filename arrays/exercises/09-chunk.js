/**
 * Task description: Write a method that splits an array into parts of determined size
 * Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 * Task complexity: 3 of 5
 * @param {Array} array - An array of any elements
 * @param {number} size - size of chunks
 * @returns {Array}
 */
const chunk = (array, size) => {
  let chunkArray = [];
  for (let i = 0; i < array.length; i += size) {
    try {
      let chunk = array.slice(i, i + size);
      chunkArray.push(chunk);
    } catch (e) {
      chunkArray.push(i);
    }
  }
  return chunkArray;
};

console.log(chunk([1, 2, 3, 4, 5], 2));
