const a = Promise.reject("error");
a.catch((res) => res + "a")
  .catch((res) => console.log(res + "b"))
  .then((res) => console.log(res));
