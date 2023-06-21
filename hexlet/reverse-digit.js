const reverse = (num) => {
  let result = "";

  const string = num.toString();

  if (num >= 0) {
    for (let i = string.length - 1; i >= 0; i -= 1) {
      result += string[i];
    }

    return +result;
  }

  if (num < 0) {
    for (let i = string.length - 1; i > 0; i -= 1) {
      result += string[i];
    }
    return +result * -1;
  }
};

console.log(reverse(-123));
