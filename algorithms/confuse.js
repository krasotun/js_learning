import fs from "fs";
const fileContent = fs.readFileSync("input.txt", "utf8");
const input = fileContent.toString().trim().split("\n");
const [len, count] = input[0].split(" ");
const incArr = input[1].split(" ");

const minMax = (len, count, array) => {
  const maxA = Math.max(...array);
  const minA = Math.min(...array);

  return maxA - minA;
};

const result = minMax(len, count, incArr);

fs.writeFileSync("output.txt", result.toString());
