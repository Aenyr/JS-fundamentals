// Write a function to get the first n characters and add “...” at the end of newly created string.

function addDots(str, n) {
  let newString = "";
  let dots = "...";
  for (let i = 0; i <= n; i++) {
    if (i < n) {
      newString += str[i];
    } else {
      newString += dots;
    }
  }
  return newString;
}

console.log(addDots("Once upon a time in a land far, far away", 16));
