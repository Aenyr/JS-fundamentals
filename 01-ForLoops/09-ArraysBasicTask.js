// Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes
//
// Input: e = 3, a = [5, -4.2, 18, 7]
// Output: no

function checkArray(arr, stand) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === stand) {
      return console.log("yes");
    }
  }
  return console.log("no");
}
checkArray([5, -4.2, 3, 7], 3);
