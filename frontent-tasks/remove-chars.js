// Given a string contaning only a, b and c, remove all b and ac.

const removeChars = (str) => {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (stack.length > 0 && str[i] === "c" && stack[stack.length - 1] === "a") {
      stack.pop();
    } else if (str[i] !== "b") {
      stack.push(str[i]);
    }
  }

  return stack.join("");
};

console.log(removeChars("ab")); // 'a'
console.log(removeChars("abc")); // ''
console.log(removeChars("cabbaabcca")); // 'caa'
