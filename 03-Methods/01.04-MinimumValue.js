// Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }

let smoll = function (input) {
  obj = {};
  obj.minValue = Math.min(...input);
  obj.minLastIndex = input.lastIndexOf(Math.min(...input));
  return console.log(obj);
};

smoll([1, 4, -2, 11, 8, 1, -2, 3]);
