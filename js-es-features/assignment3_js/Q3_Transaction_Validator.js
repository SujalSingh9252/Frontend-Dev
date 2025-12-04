'use strict';
// Q3 - Transaction Validator
// Throws custom errors for negative amount, missing fields, or null entries.

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

class TransactionError extends Error { constructor(message, type, tx){ super(message); this.type = type; this.tx = tx; } }

const valid = [];
const invalid = [];

for (const tx of transactions) {
  try {
    if (tx === null) throw new TransactionError('Null transaction', 'NullEntry', tx);
    if (typeof tx !== 'object') throw new TransactionError('Invalid transaction type', 'InvalidType', tx);
    if (!('id' in tx)) throw new TransactionError('Missing id', 'MissingField', tx);
    if (!('amount' in tx)) throw new TransactionError('Missing amount', 'MissingField', tx);
    if (typeof tx.amount !== 'number') throw new TransactionError('Invalid amount type', 'InvalidField', tx);
    if (tx.amount < 0) throw new TransactionError('Negative amount', 'NegativeAmount', tx);

    valid.push(tx);
  } catch (err) {
    if (err instanceof TransactionError) {
      invalid.push({ type: err.type, message: err.message, tx: err.tx });
      console.warn('Transaction error:', err.type, err.message, 'record:', err.tx);
    } else {
      invalid.push({ type: 'Unknown', message: err.message, tx });
      console.error('Unknown error:', err);
    }
  }
}

console.log('\nTransaction Report:');
console.log('Valid transactions:', valid);
console.log('Invalid transactions:', invalid);
console.log('Counts -> success:', valid.length, '| failed:', invalid.length);
