// //Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade.
// David - 80
// Marko - 77
// Dany - 88
// John - 95
// Thomas - 68
// The grades are computed as follows:
// <60% - F
// <70% - D
// <80% - C
// <90% - B
// <100% - A

let data = [
  ["David", 80],
  ["Marko", 77],
  ["Dany", 88],
  ["John", 95],
  ["Thomas", 68],
];

for (let i = 0; i < data.length; i++) {
  let student = data[i][0];
  let mark = data[i][1];
  if (mark < 60) {
    console.log(student + " F");
  } else if (mark >= 60 && mark < 70) {
    console.log(student + " D");
  } else if (mark >= 70 && mark < 80) {
    console.log(student + " C");
  } else if (mark >= 80 && mark < 90) {
    console.log(student + " B");
  } else if (mark >= 90 && mark <= 100) {
    console.log(student + " A");
  }
}
