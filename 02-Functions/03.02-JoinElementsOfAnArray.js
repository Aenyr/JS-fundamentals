// Write a program to join all elements of the array into a string skipping elements that are
// undefined, null, NaN or Infinity.
// [NaN, 0, 15, false, -22, '', undefined, 47, null]

function justString(input) {
  let newString = "";
  for (let i = 0; i < input.length; i++) {
    if (
      input[i] !== undefined &&
      input[i] !== null &&
      !isNaN(input[i]) &&
      isFinite(input[i]) &&
      input[i] !== false
    ) {
      newString += input[i];
    }
  }
  return newString;
}
console.log(justString([NaN, 0, 15, false, -22, "", undefined, 47, null]));
