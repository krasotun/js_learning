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
  const sorted = [...array.sort((a, b) => a - b)];

  let left = 0;
  let right = len - 1;

  while (left < right) {
    const sum = sorted[left] + sorted[right];

    if (sum === digit) {
      return [sorted[left], sorted[right]].join(" ");
    }

    if (sum > digit) {
      right -= 1;
    }

    if (sum < digit) {
      left += 1;
    }

    if (left === right) {
      return "None";
    }
  }
}

console.log(twoSums(10, [-91, -56, -44, -32, -10, 33, 55, 58, 87, 94], -88)); // none
// console.log(twoSums(6, [-1, -1, -9, -7, 3, -6], 2)); // -1 3

// function twoSums(len, array, digit) {
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (array[i] + array[j] === digit) {
//         return [array[i], array[j]].join(" ");
//       }
//     }
//   }
//   return "None";
// }

console.log(-56 + -32);

console.log("username=admin&password=secret".length);
