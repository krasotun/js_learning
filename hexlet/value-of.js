const solution = (value) => ({
  value,
  valueOf() {
    return `Value is ${this.value}`;
  },
});

console.log(solution(1111));
