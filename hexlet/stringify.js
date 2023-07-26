const stringify = (data, replacer = " ", spacesCount = 1) => {
  const getFrontIdent = (depth, replacer, spacesCount) =>
    replacer.repeat(depth * spacesCount);
  const getBackIdent = (depth, replacer, spacesCount) =>
    replacer.repeat(depth * spacesCount - spacesCount);

  const makeString = (data, depth) => {
    if (typeof data !== "object" || data === null) {
      return `${data}`;
    }
    const frontIdent = getFrontIdent(depth, replacer, spacesCount);
    const backIdent = getBackIdent(depth, replacer, spacesCount);
    const currentValue = Object.entries(data);
    const lines = currentValue.map(
      ([key, value]) => `${frontIdent}${key}: ${makeString(value, depth + 1)}`
    );
    return ["{", ...lines, `${backIdent}}`].join("\n");
  };

  return makeString(data, 1);
};

const data = { hello: "world", is: true, nested: { count: 5 } };
const nested = {
  string: "value",
  boolean: true,
  number: 5,
  float: 1.25,
  object: {
    5: "number",
    1.25: "float",
    null: "null",
    true: "boolean",
    value: "string",
    nested: {
      boolean: true,
      float: 1.25,
      string: "value",
      number: 5,
      null: null,
    },
  },
};

console.log(stringify(nested, " "));
