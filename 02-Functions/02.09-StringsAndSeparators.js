// Write a function that replaces spaces in a string
//with provided separator. If separator is not
// provided, use “-” (dash) as the default separator.
// "My random string", "_" -> "My_random_string"
// "My random string", "+" -> "My+random+string"
// "My random string" -> "My-random-string"

function change(input, separator) {
  let result = "";
  if (separator === undefined) {
    separator = "-";
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      result = result + separator;
    } else {
      result = result + input[i];
    }
  }
  return result;
}
console.log(change("My random string", "+"));
