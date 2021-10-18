// Write a program to filter out falsy values from the array.
// [NaN, 0, 15, false, -22,"", undefined, 47, null] -> [15, -22, 47]

function findTruthy(input) {
  let truthy = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i]) {
      truthy[truthy.length] = input[i];
    }
  }
  return truthy;
}
console.log(findTruthy([NaN, 0, 15, false, -22, "", undefined, 47, null]));
