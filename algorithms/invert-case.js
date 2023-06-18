export const invert = (string) => {
  const newArr = [];

  for (const symbol of string) {
    if (symbol === symbol.toUpperCase()) {
      newArr.push(symbol.toLowerCase());
    } else if (symbol === symbol.toLowerCase()) {
      newArr.push(symbol.toUpperCase());
    }
  }

  return newArr.join("");
};

console.log(invert("Hello, World!"));
