// которая выполняет поверхностное копирование объектов.

const clone = (object) => {
  const result = {};

  const keys = Object.keys(object);

  for (const key of keys) {
    result[key] = object[key];
  }

  return result;
};
