const makeRational = (numer, denom) => {
  return {
    numer,
    denom,
    setNumer(newNumer) {
      this.numer = newNumer;
    },
    setDenom(newDenom) {
      this.demon = newDenom;
    },
    getNumer() {
      return this.numer;
    },
    getDenom() {
      return this.denom;
    },
    toString() {
      return `${this.getNumer()}/${this.getDenon()}`;
    },
    add(number) {
      return (
        ((this.getNumer() * number.getDenom() +
          this.getDenon() * number.getNumer()) /
          this.getDenom()) *
        number.getDenom()
      );
    },
  };
};
