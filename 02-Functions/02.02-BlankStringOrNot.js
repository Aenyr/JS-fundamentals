// Write a function to check whether a string is blank or not.
// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false

function checkString(str) {
  return str === " " ? true : false;
}

console.log(checkString(" "));
