// Write a function that converts an array of strings into an array of numbers. Filter out all
// non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

function clean(input) {
  let newArray = [];

  for (let i = 0; i < input.length; i++) {
    if (typeof input[i] === "string") {
      newArray[i] = Number(input[i]);
    }
  }

  return newArray;
}

console.log(clean(["1", "21", undefined, "42", "1e+3", Infinity]));

// console.log(typeof "42");
// console.log(typeof 42);

// console.log(NaN !== NaN);
