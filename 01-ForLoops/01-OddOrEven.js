// Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.

function oddOrEven() {
  for (let i = 0; i < 15; i++) {
    if (i % 2 === 0) {
      //console.log(i + " even");
      console.log(`${i} even`);
    } else {
      console.log(`${i} odd`);
    }
  }
}
oddOrEven();
