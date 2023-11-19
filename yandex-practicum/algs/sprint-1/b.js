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
// и на экране появляются три случайных числа. Если все три числа оказываются одной чётности, игрок выигрывает.

// Напишите программу, которая по трём числам определяет, выиграл игрок или нет.

// Формат ввода
// В первой строке записаны три случайных целых числа a, b и c. Числа не превосходят 109 по модулю.

// Формат вывода
// Выведите «WIN», если игрок выиграл, и «FAIL» в противном случае.
function checkParity(a, b, c) {
  const parity = (num) => (num % 2 === 0 ? "even" : "odd");
  console.log(parity(a), parity(b), parity(c));

  return parity(a) === parity(b) && parity(a) === parity(c);
}

console.log(checkParity(1, 2, -3));

function solve() {
  const inputNumbers = readArray();
  const a = inputNumbers[0];
  const b = inputNumbers[1];
  const c = inputNumbers[2];
  if (checkParity(a, b, c)) {
    process.stdout.write("WIN");
  } else {
    process.stdout.write("FAIL");
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
