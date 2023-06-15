function addDigits(num) {
  let result = num;

  while (result >= 10) {
    result = calculateSum(result);
  }

  return result;
}

function calculateSum(num) {
  const array = num.toString().split("");

  if (array.length <= 1) {
    return;
  }
  return array.reduce((curr, acc) => {
    acc = Number(curr) + Number(acc);
    return acc;
  });
}

export default addDigits;
