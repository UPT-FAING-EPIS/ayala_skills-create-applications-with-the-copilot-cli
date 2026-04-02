const { add, subtract, multiply, divide, modulo, exponentiate, squareRoot } = require('../calculator');

describe('Calculator Functions', () => {
  
  // ============ ADDITION TESTS ============
  describe('add()', () => {
    test('should add 2 + 3 = 5 (from image example)', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two positive numbers', () => {
      expect(add(10, 20)).toBe(30);
    });

    test('should add negative numbers', () => {
      expect(add(-5, -10)).toBe(-15);
    });

    test('should add mixed positive and negative numbers', () => {
      expect(add(15, -5)).toBe(10);
    });

    test('should add zero', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('should add multiple numbers', () => {
      expect(add(1, 2, 3, 4, 5)).toBe(15);
    });

    test('should return 0 when no arguments provided', () => {
      expect(add()).toBe(0);
    });

    test('should add decimal numbers', () => {
      expect(add(1.5, 2.5)).toBe(4);
    });
  });

  // ============ SUBTRACTION TESTS ============
  describe('subtract()', () => {
    test('should subtract 10 - 4 = 6 (from image example)', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract two positive numbers', () => {
      expect(subtract(50, 20)).toBe(30);
    });

    test('should subtract negative numbers', () => {
      expect(subtract(-5, -10)).toBe(5);
    });

    test('should subtract resulting in negative', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should subtract zero', () => {
      expect(subtract(10, 0)).toBe(10);
    });

    test('should subtract multiple numbers sequentially', () => {
      expect(subtract(100, 10, 20, 30)).toBe(40);
    });

    test('should subtract decimal numbers', () => {
      expect(subtract(10.5, 2.5)).toBe(8);
    });

    test('should subtract from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });
  });

  // ============ MULTIPLICATION TESTS ============
  describe('multiply()', () => {
    test('should multiply 45 * 2 = 90 (from image example)', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply two positive numbers', () => {
      expect(multiply(6, 7)).toBe(42);
    });

    test('should multiply negative numbers', () => {
      expect(multiply(-5, -4)).toBe(20);
    });

    test('should multiply positive and negative', () => {
      expect(multiply(5, -4)).toBe(-20);
    });

    test('should multiply by zero', () => {
      expect(multiply(10, 0)).toBe(0);
    });

    test('should multiply multiple numbers', () => {
      expect(multiply(2, 3, 4)).toBe(24);
    });

    test('should return 1 when no arguments provided', () => {
      expect(multiply()).toBe(1);
    });

    test('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply by 1 (identity)', () => {
      expect(multiply(42, 1)).toBe(42);
    });
  });

  // ============ DIVISION TESTS ============
  describe('divide()', () => {
    test('should divide 20 / 5 = 4 (from image example)', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide two positive numbers', () => {
      expect(divide(100, 10)).toBe(10);
    });

    test('should divide resulting in decimal', () => {
      expect(divide(7, 2)).toBe(3.5);
    });

    test('should divide negative numbers', () => {
      expect(divide(-20, -5)).toBe(4);
    });

    test('should divide positive by negative', () => {
      expect(divide(20, -5)).toBe(-4);
    });

    test('should divide by 1 (identity)', () => {
      expect(divide(42, 1)).toBe(42);
    });

    test('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw error with multiple divisors where one is zero', () => {
      expect(() => divide(100, 5, 0)).toThrow('Division by zero is not allowed');
    });

    test('should divide by multiple numbers sequentially', () => {
      expect(divide(100, 2, 5)).toBe(10);
    });

    test('should divide decimal numbers', () => {
      expect(divide(10, 2.5)).toBe(4);
    });
  });

  // ============ EDGE CASES & SPECIAL SCENARIOS ============
  describe('Edge Cases and Special Scenarios', () => {
    test('should handle very large numbers in addition', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });

    test('should handle very large numbers in multiplication', () => {
      expect(multiply(1000, 2000)).toBe(2000000);
    });

    test('should maintain precision with floating point operations', () => {
      expect(divide(1, 3)).toBeCloseTo(0.333, 3);
    });

    test('should add many numbers', () => {
      const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
      expect(add(...numbers)).toBe(5050);
    });

    test('should multiply negative numbers with odd count', () => {
      expect(multiply(-1, -2, -3)).toBe(-6);
    });

    test('should multiply negative numbers with even count', () => {
      expect(multiply(-1, -2)).toBe(2);
    });
  });

  // ============ MODULO TESTS ============
  describe('modulo()', () => {
    test('should compute 10 % 3 = 1', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should compute 10 % 5 = 0 (no remainder)', () => {
      expect(modulo(10, 5)).toBe(0);
    });

    test('should compute remainder of negative dividend', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('should compute remainder with negative divisor', () => {
      expect(modulo(10, -3)).toBe(1);
    });

    test('should compute 0 % 5 = 0', () => {
      expect(modulo(0, 5)).toBe(0);
    });

    test('should throw error when divisor is zero', () => {
      expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
    });

    test('should compute remainder with decimal numbers', () => {
      expect(modulo(10.5, 3)).toBeCloseTo(1.5, 5);
    });
  });

  // ============ EXPONENTIATION TESTS ============
  describe('exponentiate()', () => {
    test('should compute 2 ^ 3 = 8', () => {
      expect(exponentiate(2, 3)).toBe(8);
    });

    test('should compute 5 ^ 2 = 25', () => {
      expect(exponentiate(5, 2)).toBe(25);
    });

    test('should compute x ^ 0 = 1', () => {
      expect(exponentiate(10, 0)).toBe(1);
    });

    test('should compute x ^ 1 = x', () => {
      expect(exponentiate(7, 1)).toBe(7);
    });

    test('should compute negative base with even exponent', () => {
      expect(exponentiate(-2, 2)).toBe(4);
    });

    test('should compute negative base with odd exponent', () => {
      expect(exponentiate(-2, 3)).toBe(-8);
    });

    test('should compute fractional exponent (square root)', () => {
      expect(exponentiate(9, 0.5)).toBe(3);
    });

    test('should compute 0 ^ 0 = 1', () => {
      expect(exponentiate(0, 0)).toBe(1);
    });
  });

  // ============ SQUARE ROOT TESTS ============
  describe('squareRoot()', () => {
    test('should compute square root of 9 = 3', () => {
      expect(squareRoot(9)).toBe(3);
    });

    test('should compute square root of 4 = 2', () => {
      expect(squareRoot(4)).toBe(2);
    });

    test('should compute square root of 0 = 0', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should compute square root of 2 (irrational)', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414, 3);
    });

    test('should compute square root of 1 = 1', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should throw error for negative number', () => {
      expect(() => squareRoot(-1)).toThrow('Square root of a negative number is not allowed');
    });

    test('should throw error for negative number (-9)', () => {
      expect(() => squareRoot(-9)).toThrow('Square root of a negative number is not allowed');
    });
  });
});
