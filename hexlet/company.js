const make = (name, params) => {
  const result = {
    name,
    state: "moderating",
    createdAt: Date.now(),
  };

  return { ...result, ...params };
};

console.log(make("Hexlet", { website: "hexlet.io", state: "published" }));
