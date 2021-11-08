// Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.
// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]

(function (input) {
  let result = [];

  for (let i = 0; i < input.length; i++) {
    result[i] = input[i];
    if (input[0]) {
      result[0] = input[input.length - 1];
    }
    if (input[input.length - 1]) {
      result[input.length - 1] = input[0];
    }
  }
  return console.log(result);
})([4, 5, 11, 9]);
