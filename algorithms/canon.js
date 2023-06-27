// var fs = require("fs");
// var fileContent = fs.readFileSync("input.txt", "utf8");
// var input = fileContent.toString().trim().split("\n");
// var result = canonic(input[0]);
// fs.writeFileSync("output.txt", result.toString());

function canonic(path) {
  if (path === "") {
    return "/";
  }

  const arrayFromPath = path.split("/");

  let result = [];

  for (const part of arrayFromPath) {
    if (part === "." || part === "") {
      continue;
    }

    if (part === "..") {
      result = result.slice(0, -1);
      continue;
    }

    result.push(part);
  }

  return `/${result.join("/")}`;
}

console.log(canonic("/home/"));
console.log(canonic("/../"));
console.log(canonic("/home//foo/"));
console.log(canonic("/home//foo/../")); // /home
