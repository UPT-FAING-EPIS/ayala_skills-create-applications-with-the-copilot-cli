/**
 * Calculator Module - Node.js CLI Calculator
 * Supports the following basic arithmetic operations:
 * - Addition: Add two or more numbers together
 * - Subtraction: Subtract one or more numbers from the first number
 * - Multiplication: Multiply two or more numbers together
 * - Division: Divide numbers with error handling for division by zero
 * - Modulo: Compute the remainder of division with error handling for division by zero
 * - Exponentiation: Raise a base number to the power of an exponent
 * - Square Root: Compute the square root of a number with error handling for negative numbers
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
 * Computes the remainder of dividing the first number by the second
 * @param {number} dividend - The number to be divided
 * @param {number} divisor - The number to divide by
 * @returns {number} The remainder of the division
 * @throws {Error} If the divisor is zero
 */
function modulo(dividend, divisor) {
  if (divisor === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return dividend % divisor;
}

/**
 * Raises a base number to the power of an exponent
 * @param {number} base - The base number
 * @param {number} exponent - The exponent to raise the base to
 * @returns {number} The result of base raised to the exponent
 */
function exponentiate(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Computes the square root of a number
 * @param {number} number - The number to find the square root of
 * @returns {number} The square root of the number
 * @throws {Error} If the number is negative
 */
function squareRoot(number) {
  if (number < 0) {
    throw new Error('Square root of a negative number is not allowed');
  }
  return Math.sqrt(number);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  exponentiate,
  squareRoot
};
