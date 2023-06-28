// var fs = require("fs");
// var fileContent = fs.readFileSync("input.txt", "utf8");
// var input = fileContent.toString().trim().split("\n");
// var result = slow(input[0], input[1]);
// fs.writeFileSync("output.txt", result.toString());

function slow(day, string) {
  //   const prices = string.split(" ").map((element) => +element);
  const prices = string;

  const min = Math.min(...prices);
  const max = Math.max(...prices);

  if (min === max || day === 0) {
    return `${0} ${0}`;
  }

  if (prices.indexOf(min) < prices.indexOf(max)) {
    return `${prices.indexOf(min) + 1} ${prices.indexOf(max) + 1}`;
  }

  return `${0} ${0}`;
}

console.log(slow(3, [1000, 3000, 4000]));
console.log(slow(4, [5, 5, 5, 5]));
console.log(slow(7, [3, 4, 5, 4, 3, 2, 3]));
console.log(slow(7, [1, 4, 7, 4, 1, 12, 3]));
console.log(slow(5, [5, 4, 3, 2, 1]));
console.log(slow(5, [1, 1, 5, 1, 5]));
console.log(slow(7, [1001, 1004, 1, 4]));
