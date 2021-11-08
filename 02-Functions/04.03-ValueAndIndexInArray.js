// Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

function minimum(input) {
  let result = [0];
  let res;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (result[j] > input[i]) {
        result[j] = input[i];
        res = i;
      }
    }
  }

  return result + ", " + res;
}

console.log(minimum([4, 2, 2, -1, 6]));
