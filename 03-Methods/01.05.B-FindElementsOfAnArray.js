// Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]

function find(input, word) {
  return (result = input.filter((elem) => elem.toLowerCase().startsWith(word)));
}

console.log(find(["JavaScript", "Programming", "fun", "product"], "pro"));
