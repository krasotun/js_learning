// const lastWord = (string) => {
//   let counter = 0;

//   const trimmed = string.trim();

//   for (let i = trimmed.length - 1; i >= 0; i -= 1) {
//     if (trimmed[i] !== " ") {
//       counter += 1;
//     } else {
//       return counter;
//     }
//   }
//   return counter;
// };

// console.log(lastWord("hello, man  "));

const another = (string) => {
  const words = string.trim().split(" ");
  const last = words.at(-1);

  return last.length;
};

console.log(another("hello, man"));
