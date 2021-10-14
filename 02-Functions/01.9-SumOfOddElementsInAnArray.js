// Write a program that calculates the sum of odd elements of a given array.

function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(arraySum([1, 2, 3, 4, 5, 6, 7]));
