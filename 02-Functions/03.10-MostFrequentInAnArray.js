// Write a program to find the most frequent item of an array.
// [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]

function mostFrequent(input) {
  let counter = 0;
  let counter2 = 1;
  let result;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[i] === input[j]) counter++;
      if (counter > counter2) {
        counter2 = counter;
        result = input[i];
      }
    }
    counter = 0;
  }
  return result;
}

console.log(mostFrequent([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));
