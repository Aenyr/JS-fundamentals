// Write a function to find a word within a string.
// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"

function find(input, word) {
  let counter = 0;
  y = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] == word[0]) {
      for (let j = i; j < i + word.length; j++) {
        if (input[j] == word[j - i]) {
          y++;
        }
        if (y == word.length) {
          counter++;
        }
      }
      y = 0;
    }
  }
  return counter;
}
console.log(find("The quick brown fox", "brown"));
