const openingSymbols = ["(", "[", "{", "<"];
const closingSymbols = [")", "]", "}", ">"];

const isBalanced = (string) => {
  const stack = [];
  const lastSymbol = string.length - 1;

  const peckBack = () => {
    return stack[stack.length - 1];
  };

  const isOpening = (symbol) => {
    return openingSymbols.indexOf(symbol) !== -1;
  };

  const isClosing = (symbol) => {
    return closingSymbols.indexOf(symbol) !== -1;
  };

  for (const symbol of string) {
    if (isOpening(symbol)) {
      stack.push(symbol);
      continue;
    }

    if (isClosing(symbol)) {
      console.log("closing", symbol);
      if (stack.length === 0) {
        return false;
      } else {
        if (
          openingSymbols.indexOf(peckBack()) === closingSymbols.indexOf(symbol)
        ) {
          console.log(peckBack());
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return stack.length === 0;
};
console.log(isBalanced("[()]["));
