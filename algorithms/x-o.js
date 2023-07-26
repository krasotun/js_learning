function XO(str) {
  let xCounter = 0;
  let oCounter = 0;

  for (const symbol of str) {
    if (symbol === "x") {
      xCounter++;
    }

    if (symbol === "o") {
      oCounter++;
    }

    if (xCounter === 0 && oCounter === 0) {
      return true;
    }
  }
  return xCounter === oCounter;
}

console.log(XO("xo"));
// console.log(XO("xxOo"));
// console.log(XO("xxxm"));
