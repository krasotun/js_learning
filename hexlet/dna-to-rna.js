const dnaToRna = (string) => {
  if (!string.length) {
    return "";
  }
  const result = [];

  for (const symbol of string.split("")) {
    if (symbol === "A") {
      result.push("U");
    } else if (symbol === "T") {
      result.push("A");
    } else if (symbol === "C") {
      result.push("G");
    } else if (symbol === "G") {
      result.push("C");
    } else {
      return null;
    }
  }

  return result.join("");
};

// dnaToRna("ACGTGGTCTTAA"); // 'UGCACCAGAAUU'
// dnaToRna("CCGTA"); // 'GGCAU'
// dnaToRna(""); // ''
console.log(dnaToRna("ACNTG")); // null
