function deepClone(object) {
  if (typeof object !== "object" || object === null) {
    return object;
  }
  const clone = {};

  for (const key in object) {
    clone[key] = deepClone(object[key]);
  }

  return clone;
}

const data = {
  key: "value",
  key2: {
    key: "innerValue",
    innerKey: {
      anotherKey: "anotherValue",
    },
  },
};

console.log(deepClone(data));
