function fibonacci(n) {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("n must be a non-negative integer.");
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

function isPrime(n) {
  if (!isNonNegativeInteger(n)) {
    throw new Error("n must be a non-negative integer.");
  }
  if (n <= 1) {
    return false;
  }
  if (n <= 3) {
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

function isNonNegativeInteger(n) {
  return Number.isInteger(n) && n >= 0;
}

module.exports = {
  fibonacci,
  isPrime,
};
