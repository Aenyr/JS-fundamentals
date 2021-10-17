// Write a function to calculate how many years there are left until retirement based on the
// year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
// already retired, a proper message should be displayed.

function ret(input, str) {
  let age;
  age = 2021 - input;
  if (str === "F" && age >= 60) return "Already retired!";
  else if (str === "M" && age >= 65) return "Already retired!";
  else if (str === "F") return 60 - age + " years untill retirement.";
  else if (str === "M") return 65 - age + " years untill retirement.";
}
console.log(ret(1994, "F"));
