import isObject from "lodash/isObject.js";

const deepClone = (object) => {
  if (object === null || !isObject(object)) {
    return object;
  }
  const clone = {};

  for (const key in object) {
    clone[key] = deepClone(object[key]);
  }

  return clone;
};

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
