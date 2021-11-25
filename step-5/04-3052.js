const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
// const input = ["42", "0", "1", "2", "3", "4", "5", "6", "7", "8"];
let count = 0;

for (let i = 0; i < 42; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j] % 42 === i) {
      count++;
      break;
    }
  }
}

console.log(count);
