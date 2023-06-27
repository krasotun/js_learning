var fs = require("fs");
var fileContent = fs.readFileSync("input.txt", "utf8");
var input = fileContent.toString().trim().split("\n");
var result = ladder(+input[0]);
fs.writeFileSync("output.txt", result.toString());

function ladder(total) {
  if (total === 1) {
    return total;
  }

  let counter = 1;
  let bricksLeft = total - 1;

  while (bricksLeft > counter) {
    counter += 1;
    bricksLeft -= counter;
  }

  return counter;
}
