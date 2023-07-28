class Course {
  constructor(name) {
    this._name = name;
  }

  getName() {
    return this._name;
  }
}

const validateProperty = (target, name) => {
  if (!(name in target)) {
    throw new Error(`Property "${name}" doesn't exist`);
  }
  if (name.startsWith("_")) {
    throw new Error(`Property "${name}" is protected`);
  }
};

const protect = (object) => {
  return new Proxy(object, {
    get: (target, name) => {
      validateProperty(target, name);
      const property = target[name];
      if (typeof property === "function") {
        return property.bind(object);
      }

      return property;
    },
    set: (target, name, value) => {
      validateProperty(target, name);
      target[name] = value;

      return true;
    },
  });
};

const course = new Course("Object-oriented design");
const protectedCourse = protect(course);

// console.log(course.getName()); // "Object-oriented design"
// console.log(protectedCourse.getName()); // "Object-oriented design"

// console.log(course._name); // "Object-oriented design"
// console.log(course._nonExists); // undefined

// protectedCourse._name; // Error
// protectedCourse._name = "OOD"; // Error
protectedCourse._nonExists; // Error
