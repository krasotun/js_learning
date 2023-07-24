function each(objects, callback) {
  return objects.forEach((object) => {
    console.log(object);
    callback.call(object);
  });
}

const objects = [{ name: "Karl" }, { name: "Mia" }];

function cb() {
  this.name = this.name.split("").reverse().join("");
}

each(objects, cb);
console.log(objects);
