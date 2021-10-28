// Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

let check = function (input) {
  return input.length % 2 !== 0 ? true : false;
};

console.log(check([1, 2, 9, 2, 1]));
