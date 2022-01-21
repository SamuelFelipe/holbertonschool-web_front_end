function countPrimeNumbers() {
  let count = 0;
  let aux = true;

  for (let i = 2; i < 100; i++) {
    for (let j = Math.floor(i / 2); j > 1; j--) {
      if (i % j == 0) {
        aux = false;
        break;
      }
    }
    if (aux == false) {
      aux = true;
    } else {
      count++;
    }
  }
  return count;
}

let ini = performance.now();
setTimeout(() => {
  for (let i = 1; i <= 100; i++) {
    primes = countPrimeNumbers();
  }
  console.log(
    "Execution time of calculating prime numbers 100 times was " +
      (performance.now() - ini) +
      "milliseconds."
  );
}, 0);
