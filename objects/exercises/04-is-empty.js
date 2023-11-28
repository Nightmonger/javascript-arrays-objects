/**
 * Task description: Write a method that makes a shallow check is object empty
 * Expected Result: ({}) => true, ({ a: undefined }) => true, ({ a: 1 }) => false
 * Empty values: '', null, NaN, undefined
 * Task complexity: 2 of 5
 * @param {Object} object - Object with values of primitive data types
 * @returns {boolean}
 */
const isEmpty = (object) => {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      let value = object[key];
      if (
        value !== "" &&
        value !== null &&
        !isNaN(value) &&
        value !== undefined
      ) {
        return false;
      }
    }
  }
  return true;
};

console.log(isEmpty({}));
console.log(isEmpty({ a: undefined }));
console.log(isEmpty({ a: 1 }));
