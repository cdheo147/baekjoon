const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
// const input = ["2", "3 ABC", "5 /HTP"];
const T = Number(input[0]);

let result = "";
for (let i = 1; i <= T; i++) {
  let [R, S] = input[i].split(" ");

  for (let j = 0; j < S.length; j++) {
    for (let k = 0; k < Number(R); k++) {
      result += S[j];
    }
  }

  result += "\n";
}

console.log(result);
