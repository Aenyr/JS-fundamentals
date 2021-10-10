//Write a program to compute the sum and product of an array of integers.

let data = [1, 2, 3, 4, 5];
let sum = 0;
let product = 1;

for (i = 0; i < data.length; i++) {
  sum += data[i];
  product *= data[i];
}
console.log(`Sum:  + ${sum}, Pro:  + ${product}`);
