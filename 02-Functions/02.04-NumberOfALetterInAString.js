// Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

function count(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "n") {
      counter++;
    }
  }
  return counter;
}

console.log(count("My random string"));
