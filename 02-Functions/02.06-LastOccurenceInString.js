// Write a function to find the position of the last occurrence of a character in a string. The
// result should be in human numeration form. If there are no occurrences of the character,
// function should return -1.

function position(str, char) {
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === char) {
      return i;
    }
  }
  return -1;
}

console.log(position("My random string", "y"));
