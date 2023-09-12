class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  select(fn) {
    this.collection = this.collection.map(fn);
    return this;
  }

  orderBy(fn, direction = "asc") {
    if (direction !== "asc" && direction !== "desc") {
      direction = "asc";
    }

    this.collection.sort((a, b) => {
      const itemA = fn(a);
      const itemB = fn(b);

      if (typeof itemA === "number" && typeof itemB === "number") {
        if (direction === "asc") {
          return itemA - itemB;
        } else if (direction === "desc") {
          return itemB - itemA;
        }
      }

      if (typeof itemA === "string" && typeof itemB === "string") {
        if (direction === "asc") {
          return itemA.localeCompare(itemB);
        } else if (direction === "desc") {
          return itemB.localeCompare(itemA);
        }
      }
    });
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
  { brand: "kia", model: "sorento", year: 2014 },
  { brand: "bmw", model: "m5", year: 2014 },
  { brand: "kia", model: "rio", year: 2010 },
  { brand: "kia", model: "sportage", year: 2012 },
];
const coll = new Enumerable(cars);
const result = coll.orderBy((car) => car.model);

// const result = coll
//   .orderBy((car) => car.year, "desc")
//   .where((car) => car.brand === "bmw")
//   .select((car) => car.model);

console.log(result); //['rio', 'sportage', 'm4', 'm5', 'sorento', 'm4 gt3']);
