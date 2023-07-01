// Функция принимает аргументами массив объектов и название свойства для группировки.
// Она должна возвращать объект, где ключ - это значение по заданному свойству,
//  а значение - массив с данными, подходящими для группы.

const students = [
  { name: "Tirion", class: "B", mark: 3 },
  { name: "Keit", class: "A", mark: 3 },
  { name: "Ramsey", class: "A", mark: 4 },
];

// const groupBy = (array, field) => {
//   const result = {};

//   for (const element of array) {
//     if (!Object.hasOwn(result, element[field])) {
//       result[element[field]] = [];
//     }
//     result[element[field]].push(element);
//   }
//   console.log(result);
//   return result;
// };

// const groupBy = (array, field) => {
//   const callBack = (acc, element) => {
//     if (!Object.hasOwn(acc, element[field])) {
//       acc[element[field]] = [];
//     }
//     acc[element[field]].push(element);
//     return acc;
//   };

//   return array.reduce(callBack, {});
// };

const groupBy = (array, field) => {
  return array.reduce((acc, element) => {
    if (!Object.hasOwn(acc, element[field])) {
      acc[element[field]] = [];
    }
    acc[element[field]].push(element);
    return acc;
  }, {});
};

console.log(groupBy([], "")); // {}
console.log(groupBy(students, "mark"));
// {
//   3: [
//     { name: "Tirion", class: "B", mark: 3 },
//     { name: "Keit", class: "A", mark: 3 },
//   ],
//   4: [
//     { name: "Ramsey", class: "A", mark: 4 },
//   ],
// }
