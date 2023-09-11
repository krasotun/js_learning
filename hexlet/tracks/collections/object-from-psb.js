const objMock = {
  a: {
    b: 2,
    c: 3,
  },
  d: 25,
  e: {
    f: 55,
    g: {
      h: 66,
    },
  },
};

const getValue = (path, obj, defaultValue) => {
  const paths = path.split(".");

  for (let i = 0; i < paths.length; i++) {
    if (obj[path[i]] === paths[i + 1]) {
      console.log("we are in", paths[i + 1]);
      return paths[i + 1];
    }
  }
};

console.log(getValue("e.g.h", objMock, 25)); // 66
console.log(getValue("e.g.i", objMock, 25)); // 25
