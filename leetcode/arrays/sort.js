const array = ["А11", "А2", "Б0", "А1"];

function sortData(data) {
  return data.sort((a, b) => {
    const reA = /[^А-я]/g;
    const reN = /[^0-9]/g;
    const aA = a.replace(reA, "");
    const bA = b.replace(reA, "");
    if (aA === bA) {
      const aN = parseInt(a.replace(reN, ""), 10);
      const bN = parseInt(b.replace(reN, ""), 10);
      return aN - bN;
    }
    return aA.localeCompare(bA);
  });
}

console.log(sortData(array));
