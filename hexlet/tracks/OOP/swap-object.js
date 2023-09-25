const obj = {
  name: "Marat",
  age: 41,
};

const reverseObj = (obj) => {
  const newObj = {};

  Object.entries(obj).forEach(([key, value]) => (newObj[value] = key));

  return newObj;
};

console.log(reverseObj(obj));
