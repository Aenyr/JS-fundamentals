//Write a program to compute the sum and product of an array of integers.

function compute(data, sum, product) {
  for (i = 0; i < data.length; i++) {
    sum += data[i];
    product *= data[i];
  }
  return console.log(`Sum:  + ${sum}, Pro:  + ${product}`);
}

compute([1, 2, 3, 4, 5], 0, 1);
