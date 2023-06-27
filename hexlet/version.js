const versions = (soft1, soft2) => {
  const arr1 = soft1.split(".");
  const arr2 = soft2.split(".");

  const comparer = (num1, num2) => {
    if (Number(num1) > Number(num2)) {
      return 1;
    } else if (Number(num2) > Number(num1)) {
      return -1;
    } else {
      return 0;
    }
  };

  if (comparer(arr1[0], arr2[0]) === 0) {
    return comparer(arr1[1], arr2[1]);
  }

  return comparer(arr1[0], arr2[0]);
};

// console.log(versions("0.1", "0.2"));
// console.log(versions("0.2", "0.1"));
// console.log(versions("4.2", "4.2"));

console.log(versions("0.2", "0.12"));
