const compare = (first, second) => {
  const [firstMinor, firstMajor, firstHotfix] = first
    .split(".")
    .map((el) => Number(el));

  const [secondMinor, secondMajor, secondHotfix] = second
    .split(".")
    .map((el) => Number(el));

  if (firstMinor > secondMinor) {
    return 1;
  } else if (secondMinor > firstMinor) {
    return -1;
  }

  if (firstMajor > secondMajor) {
    return 1;
  } else if (secondMajor > firstMajor) {
    return -1;
  }
  if (firstHotfix > secondHotfix) {
    return 1;
  } else if (secondHotfix > firstHotfix) {
    return -1;
  }
  return 0;
};

console.log(compare("12.1.0", "12.0.9"));
// 1, meaning first one is greater

console.log(compare("12.1.0", "12.1.2"));
// -1, meaning latter one is greater

console.log(compare("5.0.1", "5.0.1"));
// 0, meaning they are equal.
