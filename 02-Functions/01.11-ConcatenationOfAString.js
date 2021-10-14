//Write a program that concatenates a given string given number of times. For example, if
//“abc” and 4 are given values, the program prints out abcabcabcabc.

function concat(str, num) {
  let con = "";
  for (let i = 0; i < num; i++) {
    con = con + str;
  }
  return con;
}
console.log(concat("abc", 6));
