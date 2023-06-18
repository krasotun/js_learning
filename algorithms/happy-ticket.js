// @ts-check
/* eslint-disable radix */
// BEGIN (write your solution here)
export const isHappy = (string) => {
  const separator = (string.length - 1) / 2;
  let left = 0;
  let right = 0;

  for (let i = 0; i < string.length; i++) {
    if (i <= separator) {
      left = left + Number(string[i]);
    } else {
      right = right + Number(string[i]);
    }
  }

  return left === right;
};

console.log(isHappy("123321"));
// END
