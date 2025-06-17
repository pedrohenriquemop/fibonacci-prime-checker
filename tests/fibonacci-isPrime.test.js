const expect = require("chai").expect;
const { fibonacci, isPrime } = require("../index.js");

describe("Fibonacci and Prime Functions", () => {
  describe("#fibonacci()", () => {
    it("must return 0 for n=0", () => {
      expect(fibonacci(0)).to.equal(0);
    });

    it("must return 1 for n=1", () => {
      expect(fibonacci(1)).to.equal(1);
    });

    it("must return nth correct term for positive n", () => {
      expect(fibonacci(2)).to.equal(1);
      expect(fibonacci(5)).to.equal(5);
      expect(fibonacci(10)).to.equal(55);
      expect(fibonacci(13)).to.equal(233);
    });

    it("must throw an error for negative n", () => {
      expect(() => fibonacci(-1)).to.throw("n must be a non-negative integer.");
    });

    it("must throw an error for non-integer n", () => {
      expect(() => fibonacci(1.5)).to.throw(
        "n must be a non-negative integer."
      );
    });
  });

  describe("#isPrime()", () => {
    it("must return false for numbers <= 1", () => {
      expect(isPrime(0)).to.be.false;
      expect(isPrime(1)).to.be.false;
    });

    it("must return true for small prime numbers", () => {
      expect(isPrime(2)).to.be.true;
      expect(isPrime(3)).to.be.true;
      expect(isPrime(5)).to.be.true;
      expect(isPrime(7)).to.be.true;
    });

    it("must return false for non-prime numbers", () => {
      expect(isPrime(4)).to.be.false;
      expect(isPrime(6)).to.be.false;
      expect(isPrime(9)).to.be.false;
      expect(isPrime(10)).to.be.false;
      expect(isPrime(15)).to.be.false;
    });

    it("must return true for greater prime numbers", () => {
      expect(isPrime(17)).to.be.true;
      expect(isPrime(23)).to.be.true;
      expect(isPrime(29)).to.be.true;
    });

    it("must return false for greater non-prime numbers", () => {
      expect(isPrime(25)).to.be.false;
      expect(isPrime(33)).to.be.false;
      expect(isPrime(49)).to.be.false;
    });

    it("must throw an error for a negative number given", () => {
      expect(() => isPrime(-5)).to.throw("n must be a non-negative integer.");
    });

    it("must throw an error for a non-integer number given", () => {
      expect(() => isPrime(7.5)).to.throw("n must be a non-negative integer.");
    });
  });
});
