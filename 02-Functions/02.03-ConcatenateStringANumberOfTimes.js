// Write a function that concatenates a given string n times (default is 1).
// "Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

function concat(laugh, num) {
  str = "";
  for (let i = 0; i < num; i++) {
    str += laugh;
  }
  return str;
}
console.log(concat("Ha", 5));
