// var fs = require("fs");
// var fileContent = fs.readFileSync("input.txt", "utf8");
// var input = fileContent.toString().trim().split("\n");
// var result = slow(
//   +input[0],
//   input[1].split(" ").map((element) => +element)
// );
// fs.writeFileSync("output.txt", result.toString());

function slow(n, prices) {
  let maxDelta = 0;
  let minDay = 0;
  let maxDay = 0;

  let minPrice = prices[0];

  for (let i = 1; i < n; i++) {
    const currentPrice = prices[i];

    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }

    const delta = currentPrice - minPrice;

    if (delta > maxDelta) {
      maxDelta = delta;
      minDay = prices.indexOf(minPrice) + 1;
      maxDay = i + 1;
    }
  }

  if (maxDelta > 0) {
    return [minDay, maxDay].join(" ");
  } else {
    return [0, 0].join(" ");
  }
}

console.log(slow(3, [1000, 3000, 4000]));
console.log(slow(4, [5, 5, 5, 5]));
console.log(slow(7, [3, 4, 5, 4, 3, 2, 3]));
console.log(slow(7, [1, 4, 7, 4, 1, 12, 3]));
console.log(slow(5, [5, 4, 3, 2, 1]));
console.log(slow(5, [1, 1, 5, 1, 5]));
console.log(slow(7, [1001, 1004, 1, 4]));
