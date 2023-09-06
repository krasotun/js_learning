import fs from "fs";

const content = fs.readFileSync("s2.conf", "utf-8");

const input = content.toString().trim().split("\n");

const data = input
  .filter((element) => element.startsWith("environment="))
  .reduce((acc, element) => {
    const slicedElement = element.replace("environment=", "");
    const newElements = slicedElement.split(",");
    const neededElements = newElements.filter(
      (element) =>
        element.startsWith("X_FORWARDED_") ||
        element.startsWith('"X_FORWARDED_')
    );
    neededElements.forEach((element) => {
      const newElement = element.replace(/['"]|X_FORWARDED_/g, "");
      acc.push(newElement);
    });

    return acc;
  }, []);

console.log(data);
