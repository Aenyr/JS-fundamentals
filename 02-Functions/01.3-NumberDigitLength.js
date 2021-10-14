// Write a program that checks if a given number is a three digit long number.

function numberLength(number) {
  if (number > 99 && number < 1000) {
    return true;
  } else {
    return false;
  }
}
console.log(numberLength(151));
