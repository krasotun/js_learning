const cloneDeep = (obj) => {
  if (obj === null) return null;
  let clone = Object.assign({}, obj);

  if (Array.isArray(obj)) {
    clone.length = obj.length;
    return Array.from(clone);
  }
  Object.keys(clone).forEach(
    (key) =>
      (clone[key] =
        typeof obj[key] === "object" ? cloneDeep(obj[key]) : obj[key])
  );
  return clone;
};

const obj1 = {
  a: 1,
  b: {
    c: 2,
    d: {
      f: 5,
    },
  },
};
const obj2 = cloneDeep(obj1);
console.log(obj2); // { a: 1, b: { c: 2 } }
