// Write a function to find the position of the first occurrence of a character in a string. The
// result should be the position of character. If there are no occurrences of the character, the
// function should return -1.

function position(str, char) {
  let pos = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) break;
    pos++;
  }

  return pos;
}

console.log(position("My random string", "n"));
