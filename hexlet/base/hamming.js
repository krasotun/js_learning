const hamming = (number) => {
  const binary = number.toString(2);

  let counter = 0;

  for (const symbol of binary) {
    if (symbol === "1") {
      counter += 1;
    }
  }

  return counter;
};

console.log(hamming(101));
