// Write a function to get the last element of an array. Passing a parameter "n" will return the
// last "n" elements of the array.
// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]

function lastElem(input, num) {
  let last = [];
  if (num === undefined) {
    return input[input.length - 1];
  }
  for (let i = input.length - num; i < input.length; i++) {
    last[last.length] = input[i];
  }
  return last;
}
console.log(lastElem([7, 9, 0, -2], 3));
