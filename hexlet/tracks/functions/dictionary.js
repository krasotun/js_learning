// dictionary.js
// Реализуйте и экспортируйте по умолчанию функцию,
// которая объединяет несколько словарей (объектов) в один общий словарь.
// Функция принимает любое количество аргументов и возвращает результат в виде объекта, в котором каждый ключ содержит список уникальных значений в виде массива.
// Элементы в списке располагаются в том порядке, в котором они появляются во входящих словарях.

// Примеры работы:
const merge = (...args) => {
  return args.reduce((acc, current) => {
    const keys = Object.keys(current);

    keys.forEach((key) => {
      if (Object.hasOwn(acc, key)) {
        if (!acc[key].includes(current[key])) {
          acc[key].push(current[key]);
        }
      } else {
        acc[key] = [current[key]];
      }
    });
    return acc;
  }, {});
};

console.log(merge({ a: 1, b: 2, c: 3 }, { a: 3, b: 4 }, { a: 3, b: 2, d: 5 }));

// {a: [1, 3], b: [2, 4], c: [3], d: [5],}
