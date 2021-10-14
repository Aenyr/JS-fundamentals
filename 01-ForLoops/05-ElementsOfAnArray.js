//Write a program that prints the elements of the following array.

function printElements(arr) {
  let newString = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      newString += arr[i][j];
    }
  }
  return newString;
}

console.log(
  printElements([
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
  ])
);
