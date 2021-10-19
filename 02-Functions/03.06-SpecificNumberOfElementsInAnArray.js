// Write a function to create a specified number of elements with pre-filled numeric value
// array.
// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null]

function multi(num, input) {
  let result = [];
  for (let i = 0; i < input; i++) {
    result[result.length] = num;
  }

  return result;
}
console.log(multi(0, 6));
