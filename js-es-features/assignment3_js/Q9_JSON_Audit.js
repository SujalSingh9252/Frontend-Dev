'use strict';
// Q9 - JSON Audit
const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
  const line = rawData[i];
  try {
    const parsed = JSON.parse(line);
    // check required keys
    if (!('user' in parsed)) throw new Error('Missing key: user');
    if (!('age' in parsed)) throw new Error('Missing key: age');
    // convert age
    parsed.age = Number(parsed.age);
    if (Number.isNaN(parsed.age)) throw new Error('Invalid age value');
    clean.push(parsed);
  } catch (err) {
    errors.push({ line: i + 1, raw: line, error: err.message });
    console.warn('JSON parse error at line', i + 1, ':', err.message);
  }
}

console.log('\nClean entries:', clean);
console.log('Errors:', errors);

// Bonus: filter under-18 users
const adults = clean.filter(u => u.age >= 18);
console.log('Adults only:', adults);
