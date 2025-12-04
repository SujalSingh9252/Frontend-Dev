'use strict';
// Q7 - Smart Calculator
// Handles operations with error checking.

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

class InvalidOperationError extends Error { constructor(msg){ super(msg); this.name='InvalidOperationError'; } }

function calculate(op, a, b) {
  switch(op) {
    case 'add': return a + b;
    case 'subtract': return a - b;
    case 'power': return Math.pow(a, b);
    case 'divide':
      if (b === 0) throw new Error('DivideByZeroError');
      return a / b;
    case 'root':
      if (a < 0) throw new Error('RootOfNegativeError');
      return Math.pow(a, 1 / b);
    default:
      throw new InvalidOperationError('Operation not recognized: ' + op);
  }
}

for (const op of operations) {
  try {
    const result = calculate(op, num1, num2);
    console.log(`Operation: ${op} | Result: ${result}`);
  } catch (err) {
    console.error(`Operation: ${op} | Error: ${err.message}`);
  }
}
