// Write a function to convert string into an array. Space in a string should be represented as
// “null” in new array.
// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]

function intoArray(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    str[i] === " " ? (arr[i] = null) : (arr[i] = str[i]);
  }

  return arr;
}

console.log(intoArray("My random string"));
