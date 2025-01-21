function createCountdown(n) {
  let start = n;
  let called = 0;

  return function () {
    if (start <= 0 || typeof start !== "number") {
      return 0;
    }

    if (called === 0) {
      called++;
      return start;
    }
    called++;
    start -= 1;
    if (start < 0) {
      return 0;
    } else {
      return start;
    }
  };
}

const counter = createCountdown(-15);

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
