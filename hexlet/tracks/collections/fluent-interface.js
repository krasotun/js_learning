class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  sorterAsc(a, b) {
    if (a === b) {
      return 0;
    }

    if (a < b) {
      return -1;
    }

    if (b < a) {
      return 1;
    }
  }

  sorterDesc(a, b) {
    if (a === b) {
      return 0;
    }

    if (a > b) {
      return -1;
    }

    if (b > a) {
      return 1;
    }
  }

  select(fn) {
    this.collection = this.collection.map(fn);
    return this;
  }

  orderBy(fn, direction = "asc") {
    this.collection = this.collection.sort(
      direction === "asc" ? this.sorterAsc : this.sorterDesc
    );
    return this;
  }

  where(fn) {
    this.collection = this.collection.filter(fn);
    return this;
  }

  toArray() {
    return this.collection.slice();
  }
}

export default Enumerable;

const cars = [
  { brand: "bmw", model: "m4", year: 2013 },
  { brand: "bmw", model: "m4 gt3", year: 2020 },
  { brand: "bmw", model: "m5", year: 2014 },
  { brand: "kia", model: "sorento", year: 2014 },
  { brand: "kia", model: "rio", year: 2010 },
  { brand: "kia", model: "sportage", year: 2012 },
];
const coll = new Enumerable(cars);
const result = coll.orderBy((car) => car.year);

// const result = coll
//   .orderBy((car) => car.year, "desc")
//   .where((car) => car.brand === "bmw")
//   .select((car) => car.model);

console.log(result); //['rio', 'sportage', 'm4', 'm5', 'sorento', 'm4 gt3']);
