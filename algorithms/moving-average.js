const fs = require("fs");

const fileContent = fs.readFileSync("input.txt", "utf8");
const input = fileContent.toString().trim().split("\n");

const result = ma(
  +input[0],
  input[1].split(" ").map((element) => +element),
  +input[2]
);

fs.writeFileSync("output.txt", result.join(" "));

function ma(len, array, k) {
  const result = [];
  let currentSum = array.slice(0, k).reduce((current, acc) => acc + current);

  result.push(currentSum / k);

  for (let i = 0; i < len - k; i++) {
    currentSum -= array[i];
    currentSum += array[i + k];

    result.push(currentSum / k);
  }

  return result;
}

// console.log(ma(7, [1, 2, 3, 4, 5, 6, 7], 4)); // 2.5 3.5 4.5 5.5
// console.log(ma(9, [9, 3, 2, 0, 1, 5, 1, 0, 0], 3)); // 4.6666666667 1.666666667 1 2 2.333333335 2 0.3333333

// function ma(len, array, k) {
//   const result = [];

//   const getMiddle = (start, end) => {
//     let sum = 0;
//     for (let i = start; i <= end; i++) {
//       sum += array[i];
//     }
//     return sum / k;
//   };

//   for (let i = 0; i < len - k + 1; i++) {
//     result.push(getMiddle(i, i + k - 1));
//   }
//   return result;
// }
