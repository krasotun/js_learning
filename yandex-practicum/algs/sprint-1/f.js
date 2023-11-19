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
// будет ли фраза палиндромом.
// Учитываются только буквы и цифры, заглавные и строчные буквы считаются одинаковыми.
function isPalindrome(line) {
  const trimmed = line
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s/g, "")
    .toLowerCase();

  let i = 0;
  let j = trimmed.length - 1;

  while (i <= j) {
    if (trimmed[i] !== trimmed[j]) {
      return false;
    }

    i++;
    j--;
  }
  return true;
}

function solve() {
  const line = readLine();
  if (isPalindrome(line)) {
    console.log("True");
  } else {
    console.log("False");
  }
}

function readLine() {
  const line = _inputLines[_curLine];
  _curLine++;
  return line;
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
