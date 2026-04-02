/**
 * Calculator Module - Node.js CLI Calculator
 * Supports the following arithmetic operations:
 * - Addition: Add two or more numbers together
 * - Subtraction: Subtract one or more numbers from the first number
 * - Multiplication: Multiply two or more numbers together
 * - Division: Divide numbers with error handling for division by zero
 * - Modulo: Get the remainder of a division operation
 * - Power: Raise a number to a power (exponentiation)
 * - Square Root: Calculate the square root of a number
 */

/**
 * Adds two or more numbers together
 * @param {...number} numbers - Numbers to add
 * @returns {number} The sum of all numbers
 */
function add(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

/**
 * Subtracts one or more numbers from the first number
 * @param {number} first - The first number
 * @param {...number} numbers - Numbers to subtract
 * @returns {number} The result of subtraction
 */
function subtract(first, ...numbers) {
  return numbers.reduce((diff, num) => diff - num, first);
}

/**
 * Multiplies two or more numbers together
 * @param {...number} numbers - Numbers to multiply
 * @returns {number} The product of all numbers
 */
function multiply(...numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

/**
 * Divides numbers with error handling for division by zero
 * @param {number} first - The dividend (first number)
 * @param {...number} numbers - Numbers to divide by
 * @returns {number} The result of division
 * @throws {Error} If division by zero is attempted
 */
function divide(first, ...numbers) {
  return numbers.reduce((quotient, num) => {
    if (num === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return quotient / num;
  }, first);
}

/**
 * Returns the remainder of a divided by b
 * @param {number} a - The dividend
 * @param {number} b - The divisor
 * @returns {number} The remainder of a divided by b
 * @throws {Error} If b is zero
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

/**
 * Raises a base number to a power (exponentiation)
 * @param {number} base - The base number
 * @param {number} exponent - The exponent
 * @returns {number} The base raised to the exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Calculates the square root of a number
 * @param {number} n - The number to find the square root of
 * @returns {number} The square root of n
 * @throws {Error} If n is negative
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot
};
