const users = [
  { name: "Bronn", gender: "male", birthday: "1973-03-23" },
  { name: "Reigar", gender: "male", birthday: "1973-11-03" },
  { name: "Eiegon", gender: "male", birthday: "1963-11-03" },
  { name: "Sansa", gender: "female", birthday: "2012-11-03" },
];

const dest = (array) => {
  const result = [];
  for (const { name } of array) {
    result.push(name);
  }
  result.sort();

  return result;
};

console.log(dest(users));
