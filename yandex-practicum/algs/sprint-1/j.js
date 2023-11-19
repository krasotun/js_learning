function factorilize(num) {
  const findedPrimes = _findPrimes(num);

  function _findPrimes(num) {
    const primes = [];

    for (let i = 2; i <= num; i++) {
      if (_isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;

    function _isPrime(num) {
      if (num === 2) {
        return true;
      }

      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
        return true;
      }
    }
  }
}

console.log(factorilize(99));
