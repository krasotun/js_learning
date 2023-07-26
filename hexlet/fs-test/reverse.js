import fsp from "fs/promises";

const reverseFile = (filePath) => {
  fsp
    .readFile(filePath, "utf-8")
    .then((content) =>
      content
        .split("\n")
        .map((line) => line.trim())
        .reverse()
    )
    .then((newData) => fsp.writeFile(filePath, newData.join("\n")));
};

console.log(reverseFile("input.txt"));
