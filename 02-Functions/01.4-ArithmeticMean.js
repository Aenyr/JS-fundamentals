// Write a program that calculates an arithmetic mean of four numbers.

function arithmeticMean(num1, num2, num3, num4) {
  return (num1 + num2 + num3 + num4) / 4;
}
console.log(arithmeticMean(1, 2, 3, 4));

// Another way thats less hardcoded

function arithmeticMean() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
}
console.log(arithmeticMean(1, 2, 3, 4));
