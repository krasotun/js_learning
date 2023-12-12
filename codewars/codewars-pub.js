// Your fellow coders have bought you several drinks tonight in the form of a string.
//  Return a string suggesting how many glasses of water you should drink to not be hungover.

// Examples

// "1 beer"  -->  "1 glass of water"
// because you drank one standard drink

// "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
// because you drank ten standard drinks

function hydrate(s) {
  const count = s
    .split(" ")
    .map((el) => Number(el))
    .filter((el) => !isNaN(el))
    .reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, 0);

  return count === 1 ? `1 glass of water` : `${count} glasses of water`;
}

console.log(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"));
