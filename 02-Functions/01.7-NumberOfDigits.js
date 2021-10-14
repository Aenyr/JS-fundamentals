// Write a program that calculates a number of digits of a given number.

function numDigits(number) {
  let counter = 0;
  for (let i = 0; i < number; i++) {
    counter++;
    number /= 10;
  }
  return counter;
}
console.log(numDigits(51454));
