const { slice } = require("lodash");

class Truncater {
  static defaultOptions = {
    separator: "...",
    length: 200,
  };

  constructor(options) {
    this.options = { ...Truncater.defaultOptions, ...options };
  }

  // BEGIN (write your solution here)
  truncate(string, options) {
    const savedOptions = { ...this.options };
    this.options = { ...this.options, ...options };
    console.log(this.options);
    const newString = string.slice(0, this.options.length);
    let result;

    if (newString.length < string.length) {
      result = `${newString}${this.options.separator}`;
    } else {
      this.options = savedOptions;
      result = `${newString}`;
    }
    this.options = savedOptions;
    return result;
  }
  // END
}
const truncater = new Truncater({ length: 3 });
// console.log(truncater.truncate("one two")); // 'one...'
console.log(truncater.truncate("one two", { separator: "!" })); // one!
// console.log(truncater.truncate("one two", { separator: "." }));
// console.log(truncater.truncate("one two", { length: 3 }));
// console.log(truncater.truncate("one two", { length: 7 }));
