const crc32 = require("crc-32");
const getIndex = (key) => Math.abs(crc32.str(key) % 10);

const make = () => {
  return [];
};

const isCollision = (map, key) => {
  const index = getIndex(key);
  const [currentKey] = map[index];
  return currentKey !== key;
};
const map = make();

const set = (map, key, value) => {
  const index = getIndex(key);
  if (map[index] && isCollision(map, key)) {
    return false;
  } else {
    map[index] = [key, value];
    return true;
  }
};

const get = (map, key, defaultValue = null) => {
  const index = getIndex(key);

  if (map[index] && isCollision(map, key)) {
    return defaultValue;
  }
  const [, value] = map[index];

  return value;
};

export { make, set, get };
