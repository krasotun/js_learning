const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];
let _curLine = 0;

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

// Напишите программу, которая определяет, будет ли положительное целое число степенью четвёрки.

// Подсказка: степенью четвёрки будут все числа вида 4n, где n – целое неотрицательное число.
function isPowerOfFour(number) {
  if (number === 1) {
    return true;
  }

  if (number === 4) {
    return true;
  }
  const newNumber = number / 4;

  if (newNumber % 4 !== 0) {
    return false;
  }
  return isPowerOfFour(newNumber);
}

function solve() {
  const number = readInt();
  if (isPowerOfFour(number)) {
    console.log("True");
  } else {
    console.log("False");
  }
}

function readInt() {
  const n = Number(_inputLines[_curLine]);
  _curLine++;
  return n;
}

function readArray() {
  var arr = _inputLines[_curLine]
    .trim(" ")
    .split(" ")
    .map((num) => Number(num));
  _curLine++;
  return arr;
}
