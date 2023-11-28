/**
 * Task description: Write a method that verifies an argument is a plain object, not an array or null
 * Expected Result: True if object is plain, false otherwise. ({ a: 1 }) => true, ([1, 2, 3]) => false
 * Task complexity: 1 of 5
 * @param element - element to verify
 * @returns {boolean}
 */
const isPlainObject = (element) => {
  if (
    typeof element == "object" &&
    (element != null) != Array.isArray(element)
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(isPlainObject({ a: 1 }));
console.log(isPlainObject([1, 2, 3]));
