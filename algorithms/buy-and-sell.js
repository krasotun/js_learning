var fs = require("fs");
var fileContent = fs.readFileSync("input.txt", "utf8");
var input = fileContent.toString().trim().split("\n");

var result = slow(
  +input[0],
  input[1].split(" ").map((element) => +element)
);
fs.writeFileSync("output.txt", result.toString());

// function slow(n, values) {
//   let resL = 0;
//   let resR = 0;

//   let money = 256;

//   let l = 0;
//   let r = 0;

//   let maxProfit = 0;
//   let gasCount = money / values[l];

//   for (let i = 1; i < values.length; i++) {
//     if (gasCount < money / values[i]) {
//       gasCount = money / values[i];
//       l = i;
//     }
//     Матве;
//     if (maxProfit < gasCount * values[i] - money) {
//       maxProfit = gasCount * values[i] - money;
//       r = i;
//       resL = l;
//       resR = r;
//     }
//   }

//   if (resL >= resR) {
//     return `${0} ${0}`;
//   }
//   return `${resL + 1} ${resR + 1}`;
// }

// // console.log(slow(3, [1000, 3000, 4000]));
// // console.log(slow(4, [5, 5, 5, 5]));
// // console.log(slow(7, [3, 4, 5, 4, 3, 2, 3]));
// // console.log(slow(7, [1, 4, 7, 4, 1, 12, 3]));
// // console.log(slow(5, [5, 4, 3, 2, 1]));
// // console.log(slow(5, [1, 1, 5, 1, 5]));
// // console.log(slow(7, [1001, 1004, 1, 4]));
