const fs = require("fs");

const getStat = (filePath1, filePath2, callBack) => {
  fs.stat(filePath1, (_error1, { size: size1 }) => {
    fs.stat(filePath2, (_error2, { size: size2 }) => {
      const result = Math.sign(size1 - size2);
      callBack(null, result);
    });
  });
};

getStat("input.txt", "input2.txt", (_error, data) => console.log(data));

// console.log(
//   fs.stat("input.txt", (_error, data) => {
//     console.log(data);
//   })
// );
