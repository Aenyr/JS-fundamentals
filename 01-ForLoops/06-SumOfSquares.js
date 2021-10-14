//Write a program that outputs the sum of squares of the first 20 numbers.

function sumSquares(sum) {
  for (let i = 0; i <= 20; i++) {
    x = i * i;
    sum += x;
  }
  return console.log(sum);
}
sumSquares(0);
