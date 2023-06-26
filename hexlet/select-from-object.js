// которая формирует из переданного объекта другой объект,
// включающий только указанные свойства. Параметры:

// Исходный объект
// Массив имен свойств

const data = {
  user: "ubuntu",
  cores: 4,
  os: "linux",
};
const select = (object, array) => {
  const newObj = {};

  for (const element of array) {
    if (Object.hasOwn(object, element)) {
      newObj[element] = object[element];
    } else continue;
  }
  return newObj;
};

// console.log(select(data, ["user"]));
// console.log(select(data, ["os", "user"]));
console.log(select(data, ["none"]));
