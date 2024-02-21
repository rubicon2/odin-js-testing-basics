class Calculator {
  static #sanitizeParameters(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number')
      throw new Error('Argument(s) are not of type number.');
  }

  static add(a, b) {
    try {
      Calculator.#sanitizeParameters(a, b);
    } catch (error) {
      throw error;
    }
    return a + b;
  }

  static sub(a, b) {
    try {
      Calculator.#sanitizeParameters(a, b);
    } catch (error) {
      throw error;
    }
    return a - b;
  }

  static multiply(a, b) {
    try {
      Calculator.#sanitizeParameters(a, b);
    } catch (error) {
      throw error;
    }
    return a * b;
  }

  static divide(number, divisor) {
    try {
      Calculator.#sanitizeParameters(number, divisor);
    } catch (error) {
      throw error;
    }
    if (divisor === 0) throw new Error('Cannot divide by zero.');
    return number / divisor;
  }
}

module.exports = Calculator;
