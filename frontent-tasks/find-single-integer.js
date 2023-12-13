// Given an array of integers, all integers appear twice except one integer, could you quickly target it ?

const mock = [1, 1, -2];

const findSingle = (arr) => {
  const map = new Map();
  for (const value of arr) {
    if (map.has(value)) {
      const currentValue = map.get(value);
      map.set(value, currentValue + 1);
    } else {
      map.set(value, 1);
    }
  }

  for (const [key, val] of map.entries()) {
    if (val === 1) {
      return key;
    }
  }
};

console.log(findSingle(mock)); // 1
