/* eslint-disable import/prefer-default-export */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1;
  const ys = y2 - y1;

  return Math.sqrt(xs ** 2 + ys ** 2);
};

const currentPoint = [5, 5];

const locations = [
  ["Hotel", [7, 3]],
  ["Square", [5, 6]],
];
// BEGIN (write your solution here)
export const getTheNearestLocation = (locations, point) => {
  if (locations.length === 0) {
    return null;
  }

  const distances = [];
  const [xPoint, yPoint] = point;
  for (const location of locations) {
    const [destination, [xLocation, yLocation]] = location;
    const distance = getDistance([xPoint, yPoint], [xLocation, yLocation]);
    const newArr = [destination, distance];
    distances.push(newArr);
  }

  const lines = [];
  for (const distance of distances) {
    const [, value] = distance;
    lines.push(value);
  }

  const minLine = Math.min(...lines);

  let minDistance;

  for (const distance of distances) {
    const [name, value] = distance;
    if (value === minLine) {
      minDistance = name;
    }
  }

  for (const location of locations) {
    const [destination] = location;
    if (destination === minDistance) {
      return location;
    }
  }
};
// END

console.log(getTheNearestLocation(locations, currentPoint));
