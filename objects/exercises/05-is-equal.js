/**
 * Task description: Write a method that makes a shallow compare of two objects
 * Expected Result: True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
 * Task complexity: 2 of 5
 * @param {Object<string | number>} firstObj - Object with values of primitive data types
 * @param {Object<string | number>} secondObj - Object with values of primitive data types
 * @returns {boolean}
 */
const isEqual = (firstObj, secondObj) => {
  let keysObjct1 = Object.keys(firstObj);

  for (let key of keysObjct1) {
    if (firstObj[key] !== secondObj[key]) {
      return false;
    }
  }
  return true;
};

const objA = { a: 1, b: 2, c: 3 };
const objB = { a: 1, b: 2, c: 3 };
const objC = { a: 1, b: 2, c: 4 };

console.log(isEqual(objA, objB)); // Output: true
console.log(isEqual(objA, objC)); // Output: false
