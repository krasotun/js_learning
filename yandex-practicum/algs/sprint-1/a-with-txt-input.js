const fs = require("fs");
const fileContent = fs.readFileSync("input.txt", "utf8");
const input = fileContent.toString().trim().split("\n");

const values = input[0].split(" ").map((el) => +el);

fs.writeFileSync("output.txt", evaluateFunction(...values).toString());

function evaluateFunction(a, x, b, c) {
  return a * x ** 2 + b * x + c;
}
