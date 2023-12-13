// Please create a function count(), when called it should return
//  how many times it has been called, count.reset() should also implemented.

const count = (() => {
  let counter = 0;

  return function () {
    return ++counter;
  };
})();

console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3

// count.reset()

// count() // 1
// count() // 2
// count() // 3
