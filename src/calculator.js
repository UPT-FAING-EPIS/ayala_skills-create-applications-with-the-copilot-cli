/**
 * Calculator Module - Node.js CLI Calculator
 * Supports the following basic arithmetic operations:
 * - Addition: Add two or more numbers together
 * - Subtraction: Subtract one or more numbers from the first number
 * - Multiplication: Multiply two or more numbers together
 * - Division: Divide numbers with error handling for division by zero
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

module.exports = {
  add,
  subtract,
  multiply,
  divide
};
