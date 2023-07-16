import fs from "fs";
const fileContent = fs.readFileSync("input.txt", "utf8");
const input = fileContent.toString().trim().split("\n");

const len = +input[0];

const array = input.slice(1);

const result = withoutDates(len, array);
fs.writeFileSync("output.txt", result.toString());

function withoutDates(len, data) {
  let days = 1;
  for (let i = 0; i < len - 1; i++) {
    const [currentHr, currentMin, currentSec] = data[i].split(":");
    const [nextHr, nextMin, nextSec] = data[i + 1].split(":");

    if (currentHr > nextHr) {
      days += 1;
    }

    if (currentHr === nextHr) {
      if (currentMin > nextMin) {
        days += 1;
      }
      if (currentMin === currentMin) {
        if (currentSec >= nextSec) {
          days += 1;
        }
      }
    }
  }
  return days;
}
