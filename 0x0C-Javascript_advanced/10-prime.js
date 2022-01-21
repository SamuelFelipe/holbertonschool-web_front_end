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
for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}
let end = performance.now();

console.log(
  "Execution time of printing countPrimeNumbers was " +
    (end - ini) +
    " milliseconds."
);
