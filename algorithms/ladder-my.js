function ladder(total) {
  if (total === 1) {
    return total;
  }

  let counter = 1;
  let bricksLeft = total - 1;

  while (bricksLeft > counter) {
    counter += 1;
    bricksLeft -= counter;
  }

  return counter;
}

console.log(ladder(8));
console.log(ladder(5));
