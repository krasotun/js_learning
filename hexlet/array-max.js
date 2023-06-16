/* eslint-disable import/prefer-default-export, prefer-const */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// @ts-check

// BEGIN (write your solution here)
export const getMax = (array) => {
  if (array.length === 0) return null;

  const [first, ...rest] = array;

  let max = first;

  for (const element of rest) {
    if (element > max) {
      max = element;
    }
  }
  return max;
};
// END
getMax([1, 10, 8]);
