// reverse.js
// Реализуйте и экспортируйте функцию по умолчанию,
//  которая переворачивает строку задом наперед, используя рекурсию.

const reverse = (str) => {
  if (!str.length) {
    return str;
  }
  console.log(str);
  return `${str.slice(str.length - 1)}${reverse(str.slice(0, str.length - 1))}`;
};

console.log(reverse("marat")); // taram
