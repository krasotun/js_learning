function stringifyAttributes() {
  const attrs = { class: "w-75", id: "wop" };

  const data = Object.entries(attrs);

  return data.reduce((acc, [key, value]) => {
    acc += `${key}="${value}" `;
    return acc;
  }, "");
}

console.log(stringifyAttributes());
