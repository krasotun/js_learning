import fsp from "fs/promises";

const touch = (filepath) => {
  return fsp.access(filepath).catch(() => fsp.writeFile(filepath, ""));
};

console.log(touch("myfile.txt"));
