// Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]

let compare = function (input, num) {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] < num) {
      result[i] = input[i];
    }
  }

  return result.filter(Number);
};
console.log(compare([2, 3, 8, -2, 11, 4], 6));
