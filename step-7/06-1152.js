const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ");
// const input = [""];

console.log(input[0] === "" ? 0 : input.length);
