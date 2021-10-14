//Write a program that prints the elements of the following array.

function printElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i][0]);
  }
  return;
}

printElements([
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
]);
