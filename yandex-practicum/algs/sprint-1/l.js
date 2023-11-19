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
// Есть 2 строки s и t, состоящие только из строчных букв.
// Строка t получена перемешиванием букв строки s и добавлением 1 буквы в случайную позицию.
//  Нужно найти добавленную букву.

function getExcessiveLetter(firstLine, secondLine) {
  const firstMap = new Map();
  const secondMap = new Map();

  _fillMap(firstMap, firstLine);
  _fillMap(secondMap, secondLine);

  const firstMapKeys = [...firstMap.keys()];
  const secondMapKeys = [...secondMap.keys()];

  if (secondMapKeys.length > firstMapKeys.length) {
    for (const key of secondMapKeys) {
      if (!firstMap.has(key)) {
        return key;
      }
    }
  } else {
    for (const key of secondMapKeys) {
      if (firstMap.get(key) !== secondMap.get(key)) {
        return key;
      }
    }
  }

  function _fillMap(map, string) {
    for (const sym of string) {
      if (map.has(sym)) {
        const currentValue = map.get(sym);
        map.set(sym, currentValue + 1);
      } else {
        map.set(sym, 1);
      }
    }
  }
}

function solve() {
  const firstLine = readLine();
  const secondLine = readLine();
  process.stdout.write(`${getExcessiveLetter(firstLine, secondLine)}`);
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

function readLine() {
  const line = _inputLines[_curLine];
  _curLine++;
  return line;
}
