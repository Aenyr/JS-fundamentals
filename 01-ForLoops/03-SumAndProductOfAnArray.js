//Write a program to compute the sum and product of an array of integers.

let x = [1, 2, 3, 4, 5];
let a = 0;
let b = 1;

for (i = 0; i < x.length; i++) {
  a += x[i];
  b *= x[i];
}
console.log(`Sum: ` + a, `Pro: ` + b);
