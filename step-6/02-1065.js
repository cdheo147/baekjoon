const input = require("fs").readFileSync("/dev/stdin").toString();

function isHansoo(x) {
  const str = x + "";
  const diff = Number(str[0]) - Number(str[1]);

  if (x < 100) {
    return true;
  }

  for (let i = 1; i < str.length - 1; i++) {
    if (Number(str[i]) - Number(str[i + 1]) !== diff) {
      return false;
    }
  }

  return true;
}

const n = Number(input);
let result = 0;
for (let i = 1; i <= n; i++) {
  if (isHansoo(i)) {
    result += 1;
  }
}

console.log(result);
