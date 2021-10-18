// Write a program to insert a string within a string at a particular position (default is 1,
// beginning of a string).

//     "My random string", "JS " -> "JS My random string"
//     "My random string", "JS ", 10 -> "My random JS string"

function result(input, insert, position) {
  let newString = "";
  if (position === undefined) {
    position = 0;
    return (newString = newString + insert + input);
  }
  for (let i = 0; i < input.length; i++) {
    if (position === i + 1) {
      newString += " " + insert;
    } else {
      newString += input[i];
    }
  }
  return newString;
}

console.log(result("My random string", "JS ", 10));
