// Write a program that calculates a number of appearances of a given number in a given
// array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3

function appearances(a, e) {
  let counter = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === e) {
      counter++;
    }
  }
  return console.log(counter);
}
appearances([2, 4, 7, 8, 7, 7, 1], 7);
