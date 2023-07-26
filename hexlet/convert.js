const convert = (array) => {
  const result = {};

  for (const [key, value] of array) {
    if (Array.isArray(value)) {
      result[key] = convert(value);
    } else {
      result[key] = value;
    }
  }

  return result;
};

console.log(
  convert([
    ["key", [["key2", "anotherValue"]]],
    ["key2", "value2"],
  ])
);
// { key: { key2: 'anotherValue' }, key2: 'value2' }
