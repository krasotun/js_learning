const fs = require("fs");

const fileContent = fs.readFileSync("input.txt", "utf8");
const input = fileContent.toString().trim().split("\n");
const result = dogs(+input[0], input[1].split(" "), input[2].split(" "));
fs.writeFileSync("output.txt", result.join(" "));

function dogs(len, firstArray, secondArray) {
  const result = [];

  for (let i = 0; i < len; i++) {
    result.push(firstArray[i]);
    result.push(secondArray[i]);
  }

  return result.map((element) => element.toString().trim());
}
