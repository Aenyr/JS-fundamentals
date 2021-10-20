// Write a function to hide email address.
// "myemailaddress@bgit.rs" -> "mye...@bgit.rs"

function hideEmail(params) {
  let hidden = "";
  for (let i = 0; i < params.length; i++) {
    if (i > 2 && i < params.indexOf("@")) {
      hidden += ".";
    } else {
      hidden += params[i];
    }
  }
  return hidden;
}

console.log(hideEmail("myemailaddress@bgit.rs"));
