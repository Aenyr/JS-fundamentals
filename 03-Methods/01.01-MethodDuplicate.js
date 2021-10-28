// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

let duplicity = function (input) {
  let res = [];
  for (let i = 0; i < input.length; i++) {
    res.push(input[i]);
    res.push(input[i]);
  }
  return console.log(res);
};

duplicity([2, 4, 7, 11, -2, 1]);
