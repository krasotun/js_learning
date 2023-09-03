const hexToRgb = (str) => {
  const r = parseInt(str.slice(1, 3), 16);
  const g = parseInt(str.slice(3, 5), 16);
  const b = parseInt(str.slice(5, 7), 16);

  return { r, g, b };
};

console.log(hexToRgb("#24ab00")); // { r: 36, g: 171, b: 0 }

const rgbToHex = (r, g, b) => {
  const colorGenerator = (num) => num.toString(16).padStart(2, "0");

  return `#${colorGenerator(r)}${colorGenerator(g)}${colorGenerator(b)}`;
};

console.log(rgbToHex(0, 132, 12)); // '#00840c');
console.log(rgbToHex(198, 1, 35)); // '#c60123');
