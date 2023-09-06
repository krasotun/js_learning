// promisify.js
// Реализуйте и экспортируйте по умолчанию функцию, которая "промисифицирует"
// асинхронные функции с колбеками.
// Реализация этой функции опирается на тот факт, что колбек в асинхронных функциях
//  всегда передается последним параметром.

function promisify(func) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      function customCallback(err, ...results) {
        if (err) {
          return reject(err);
        }

        return resolve(results.length === 1 ? results[0] : results);
      }
      args.push(customCallback);
      func.call(this, ...args);
    });
  };
}
