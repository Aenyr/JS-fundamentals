// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

let remover = function (input) {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    if (result.indexOf(input[i]) === -1) {
      result.push(input[i]);
    }
  }
  return result.sort(function (a, b) {
    return a - b;
  });
};

console.log(remover([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));
