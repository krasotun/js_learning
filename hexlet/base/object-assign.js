// которая заполняет объект данными из другого объекта по разрешенному списку ключей. Параметры:

// Исходный объект
// Список ключей которые нужно заменить
// Данные, которые нужно сливать в исходный объект
// В случае, когда список ключей пустой, нужно сливать все данные полностью.

const company = {
  name: null,
  state: "moderating",
};

const data = {
  name: "Hexlet",
  state: "published",
};

const fill = (object, keys, data) => {
  if (!keys.length) {
    return Object.assign(object, data);
  }

  const result = {};

  for (const key of keys) {
    result[key] = data[key];
  }

  return Object.assign(object, result);
};

console.log(fill(company, ["name"], data));
// {
//   name: 'Hexlet',
//   state: 'moderating',
// }
