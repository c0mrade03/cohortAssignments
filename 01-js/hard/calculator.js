/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += parseFloat(number);
  }

  subtract(number) {
    this.result -= parseFloat(number);
  }

  multiply(number) {
    this.result *= parseFloat(number);
  }

  divide(number) {
    const divisor = parseFloat(number);
    if (divisor === 0) {
      throw new Error('Cannot divide by zero');
    }
    this.result /= divisor;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const sanitizedExpression = expression.replace(/\s+/g, '');
    const regex = /(\d+(\.\d+)?|[-a-z+*\/()])/g;
    const parantheses = [];
    const tokens = sanitizedExpression.match(regex);
    console.log(tokens);
    if (!tokens || tokens.length === 0) {
      throw new Error('Invalid expression');
    }
    for (let token of tokens) {
      if (token == '(') {
        parantheses.push('(');
      }
      else if (token == ')') {
        if (parantheses.length == 0) {
          throw new Error("Invalid Parantheses");
        }
        else {
          parantheses.pop();
        }
      }
    }
    if (parantheses.length != 0) {
      throw new Error("Invalid Parantheses");
    }
    const resultStack = [];
    const operatorStack = [];

    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
    };

    const performOperation = () => {
      const operator = operatorStack.pop();
      const operand2 = resultStack.pop();
      const operand1 = resultStack.pop();

      switch (operator) {
        case '+':
          resultStack.push(operand1 + operand2);
          break;
        case '-':
          resultStack.push(operand1 - operand2);
          break;
        case '*':
          resultStack.push(operand1 * operand2);
          break;
        case '/':
          if (operand2 === 0) {
            throw new Error('Cannot divide by zero');
          }
          resultStack.push(operand1 / operand2);
          break;
      }
    };

    for (const token of tokens) {
      if (token >= 'a' && token <= 'z') {
        throw new Error("invalid character");
      }
      if (parseFloat(token) || token === '0') {
        resultStack.push(parseFloat(token));
      } else if (token === '(') {
        operatorStack.push(token);
      } else if (token === ')') {
        while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
          performOperation();
        }
        operatorStack.pop();
      } else {
        while (
          operatorStack.length > 0 &&
          precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]
        ) {
          performOperation();
        }
        operatorStack.push(token);
      }
    }

    while (operatorStack.length > 0) {
      performOperation();
    }

    if (resultStack.length !== 1) {
      throw new Error('Invalid expression');
    }

    this.result = resultStack[0];
  }
}

module.exports = Calculator;
