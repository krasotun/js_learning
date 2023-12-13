// This difference might create troubles if there are missing alignments between client and server. It might be helpful to enforce using only one of them.
// You are asked to implement undefinedToNull() to return a copy that has all undefined replaced with null.

const undefinedToNull = (arg) => {
  if (arg === null) {
    return arg;
  } else if (arg === undefined) {
    return null;
  } else if (Array.isArray(arg)) {
    return arg.map(undefinedToNull);
  } else if (typeof arg === "object") {
    return Object.keys(arg).reduce(
      (acc, currentKey) => ({
        ...acc,
        [currentKey]: undefinedToNull(arg[currentKey]),
      }),
      {}
    );
  }
  return arg;
};

console.log(undefinedToNull({ a: undefined, b: "BFE.dev" }));
// {a: null, b: 'BFE.dev'}

console.log(undefinedToNull({ a: ["BFE.dev", undefined, "bigfrontend.dev"] }));
// // {a: ['BFE.dev', null, 'bigfrontend.dev']}
