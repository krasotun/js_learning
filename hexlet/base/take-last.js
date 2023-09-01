const run = (text) => {
  // BEGIN (write your solution here)
  const takeLast = (string, nums) => {
    if (nums > string.length || !string.length) {
      return null;
    }
    return string.slice(-nums).split("").reverse().join("");
  };
  return takeLast(text, 4);
  // END
};

console.log(run("")); // null
console.log(run("cb")); // null
console.log(run("power")); // revo
console.log(run("hexlet")); // telx
