const fs = require("fs");

const fileContent = fs.readFileSync("input.txt", "utf8");
const input = fileContent.toString().trim().split("\n");

const result = twoSums(
  +input[0],
  input[1].split(" ").map((element) => +element),
  +input[2]
);

fs.writeFileSync("output.txt", result);

function twoSums(len, array, digit) {
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (array[i] + array[j] === digit) {
        return [array[i], array[j]].join(" ");
      }
    }
  }
  return "None";
}

console.log(twoSums(6, [-1, -1, -9, -7, 3, -6], 2)); // -1 3
console.log(twoSums(8, [6, 2, 8, -3, 1, 1, 6, 10], 100)); // none
