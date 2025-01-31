// html.js
// Реализуйте и экспортируйте по умолчанию функцию,
// которая принимает на вход список тегов, находит среди них теги
//  a, link и img, а затем извлекает ссылки и возвращает список ссылок.
//  Теги подаются на вход в виде массива, где каждый элемент это тег.
//  Тег имеет следующую структуру:

// name — имя тега.
// href или src — атрибуты.
// Атрибуты зависят от тега: тег img имеет атрибут src, тег a — href, link — href.

const tags = [
  { name: "img", src: "hexlet.io/assets/logo.png" },
  { name: "div" },
  { name: "link", href: "hexlet.io/assets/style.css" },
  { name: "h1" },
];

const getLinks = (tags) => {
  return [...tags]
    .filter(
      (tag) => tag.name === "a" || tag.name === "link" || tag.name === "img"
    )
    .map((tag) => {
      return tag.src ?? tag.href;
    });
};

const links = getLinks(tags);

console.log(links);

// [
//   'hexlet.io/assets/logo.png',
//   'hexlet.io/assets/style.css'
// ];
