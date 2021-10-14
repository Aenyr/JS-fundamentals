// Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8];
// Output array: [-3, 22, 10, 6.8, -8];

function multiply(numbers) {
  let sum = [];
  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] > 0) {
      sum[i] = numbers[i] * 2;
    } else {
      sum[i] = numbers[i];
    }
  }
  return sum;
}
console.log(multiply([-3, 11, 5, 3.4, -8]));
