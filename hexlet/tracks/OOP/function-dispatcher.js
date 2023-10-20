// В структуре тега есть три специальных ключа:

// name — имя тега.
// tagType — тип тега, определяет его парность (pair) или одиночность (single).
// body — тело тега, используется для парных тегов. Если у парного тега нет содержимого,
// то body равно пустой строке ''.
// Всё остальное становится атрибутами тега и не зависит от того, парный он или нет.

const stringify = (tag) => {
  const excludedAttrs = ["name", "tagType", "body"];

  const mapping = {
    pair: (tag) =>
      `<${tag.name}${biuldAttrs(tag)}>${tag.body ?? ""}</${tag.name}>`,
    single: (tag) => `<${tag.name}${biuldAttrs(tag)}>`,
  };

  const biuldAttrs = (tag) => {
    return Object.keys(tag)
      .filter((attr) => !excludedAttrs.includes(attr))

      .map((attr) => ` ${attr}="${tag[attr]}"`)
      .join("");
  };

  return mapping[tag.tagType](tag);
};

console.log(
  stringify({
    name: "div",
    tagType: "pair",
    body: "text2",
    id: "wow",
  })
);

console.log("Test");
console.log("Test1");
console.log("Test2");
console.log("Test3");
