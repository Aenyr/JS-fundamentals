// Write a program that calculates the number of appearances of a letter a in a given string.
// Modify the program so it calculates the number of both letters a and A.

function findLetter(sentance, letter1, letter2) {
  let counter = 0;
  for (let i = 0; i < sentance.length; i++) {
    if (letter1 === sentance[i] || letter2 === sentance[i]) counter++;
  }
  return counter;
}
console.log(findLetter("for each And every one", "a", "A"));
