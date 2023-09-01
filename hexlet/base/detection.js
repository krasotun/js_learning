const findWhere = (array, object) => {
  const keys = Object.keys(object);

  for (const element of array) {
    let counter = 0;

    const includedKeys = Object.keys(element);

    for (const includedKey of includedKeys) {
      if (element[includedKey] === object[includedKey]) {
        counter++;
      }
    }

    if (counter === keys.length) {
      return element;
    }
  }
  return null;
};
console.log(
  findWhere(
    [
      { title: "Book of Fooos", author: "FooBar", year: 1111 },
      { title: "Cymbeline", author: "Shakespeare", year: 1611 },
      { title: "The Tempest", author: "Shakespeare", year: 1611 },
      { title: "Book of Foos Barrrs", author: "FooBar", year: 2222 },
      { title: "Still foooing", author: "FooBar", year: 3333 },
      { title: "Happy Foo", author: "FooBar", year: 4444 },
    ],
    { author: undefined, year: 1611 }
  )
); // { title: 'Cymbeline', author: 'Shakespeare', year: 1611 }
