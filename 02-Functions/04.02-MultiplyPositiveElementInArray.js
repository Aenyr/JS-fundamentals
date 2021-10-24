// Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

function multiply(input) {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      result[i] = input[i] * 2;
    } else {
      result[i] = input[i];
    }
  }
  return result;
}
console.log(multiply([-3, 11, 5, 3.4, -8]));
