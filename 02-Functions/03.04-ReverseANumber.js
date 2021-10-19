// Write a function that reverses a number. The result must be a number.
// 12345 -> 54321 // Output must be a number

function reverse(input) {
  let convert = String(input);
  let result = "";
  for (let i = convert.length; i > 0; i--) {
    result += i;
  }
  return result;
}
console.log(reverse(123456789));
