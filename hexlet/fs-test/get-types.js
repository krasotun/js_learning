import fsp from "fs/promises";

// BEGIN
const getTypeName = (stat) => (stat.isDirectory() ? "directory" : "file");

export const getTypes = (filesPath) => {
  // функция получает путь и аккумулятор из reduce, выполняет попытку получить stat,
  // добавляет в аккумулятор строку или null и возвращает обновлённый аккумулятор
  const processPath = (filepath, result) =>
    fsp
      .stat(filepath)
      .then((data) => [...result, getTypeName(data)])
      .catch(() => [...result, null]);

  const resultPromise = filesPath.reduce(
    // promise - это аккумулятор, обёрнутый в промис, поэтому на нём вызывается then
    // result - предыдущее значение аккумулятора
    (promise, filepath) =>
      promise.then((result) => processPath(filepath, result)),
    Promise.resolve([])
  );
  return resultPromise;
};
// END

getTypes(["to", "input.txt"]).then((res) => console.log(res));
