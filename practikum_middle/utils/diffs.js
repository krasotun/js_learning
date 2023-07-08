const genDiff = (object1, object2) => {
  const result = {};

  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  for (const key of object1Keys) {
    if (object2.hasOwnProperty(key)) {
      if (object1[key] === object2[key]) {
        result[key] = "unchanged";
      } else result[key] = "changed";
    }

    if (!object2.hasOwnProperty(key)) {
      result[key] = "deleted";
    }
  }

  for (const key of object2Keys) {
    if (!object1.hasOwnProperty(key)) {
      result[key] = "added";
    }
  }
  return result;
};
console.log(
  genDiff(
    { one: "eon", two: "two", four: true },
    { two: "own", zero: 4, four: true }
  )
);
// {
//   one: 'deleted',
//   two: 'changed',
//   four: 'unchanged',
//   zero: 'added',
// }
