// Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// Input: e = 3, a = [5, -4.2, 18, 7]
// Output: no

function checkArray(input, num) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === num) {
      return console.log("yes");
    }
  }
  console.log("no");
}
checkArray([5, -4.2, 3, 7], 8);
