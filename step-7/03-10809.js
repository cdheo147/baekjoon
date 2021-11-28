const input = require("fs").readFileSync("dev/stdin").toString().trim();
// const input = "baekjoon";
const s = input;
const a = "a".charCodeAt(0);
const z = "z".charCodeAt(0);

let have;
let result = "";

for (let i = a; i <= z; i++) {
  have = false;

  for (let j = 0; j < s.length; j++) {
    if (String.fromCharCode(i) == s[j]) {
      result += `${j} `;
      have = true;
      break;
    }
  }
  if (have == false) {
    result += `-1 `;
  }
}

console.log(result);
