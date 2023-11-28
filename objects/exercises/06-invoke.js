/**
 * Task description: Write a method that invokes an array method on a specific path
 * Expected Result: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
 * Task complexity: 3 of 5
 * @param {Object} object
 * @param {String} path - path in an object to property
 * @param {String} func - function to invoke
 * @param {Array} [args] - list of args
 * @returns {boolean}
 */
const invoke = (object, path, func, args) => {
  let keys = path.split(".");
  let target = object;

  for (let key of keys) {
    target = target[key];
  }
  console.log(target);
};

let x = invoke({ a: { b: [1, 2, 3] } }, "a.b", "splice", [1, 2]);
