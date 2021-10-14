//Write a program which prints the elements of the following array as a single string.

function arrOfStrings(data) {
  strArr = "";
  for (let i = 0; i < data.length; i++) {
    strArr += data[i];
  }
  return console.log(strArr);
}
arrOfStrings(["1", "A", "B", "c", "r", true, NaN, undefined]);

// console.log(data.join(""));
