// Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

let count = function (input) {
  return input.length % 2 === 0
    ? console.log(`No can do, mister!`)
    : console.log(Math.ceil(input.length / 2));
};

count([-1, 8.1, 3, 6, 2.3, 44, 2.11]);
