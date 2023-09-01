const bqs = (object) => {
  const entries = Object.entries(object);

  const result = entries.sort().map(([key, value]) => `${key}=${value}`);

  return result.join("&");
};

console.log(bqs({ per: 10, page: 1 }));
// page=1&per=10
console.log(bqs({ param: "all", param1: true }));
// param=all&param1=true
