// Write a function that says whether a number is perfect.
// 28 -> 28 is a perfect number.

function perfect(num) {
  let res = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      res += i;
    }
  }
  if (res === num && res !== 0) {
    console.log("It is a perfect number.");
  } else {
    console.log("It is not a perfect number.");
  }
}
perfect(28);
