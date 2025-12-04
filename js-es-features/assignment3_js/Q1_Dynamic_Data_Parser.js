'use strict';
// Q1 - Dynamic Data Parser
// Converts mixed API data into Number, Boolean, and String forms.
// Skips invalid numbers (NaN, strings with non-numeric chars, blank strings).

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

function isNumericString(s) {
  // A string is numeric if trimming it yields a valid number and does not contain letters.
  if (s === null || s === undefined) return false;
  const t = String(s).trim();
  if (t === '') return false;
  // allow leading/trailing whitespace and numeric formats like 3.14, -2, 5e3
  const n = Number(t);
  return !Number.isNaN(n) && /^[+-]?\d*(\.\d+)?(e[+-]?\d+)?$/i.test(t);
}

const validNumeric = [];
const invalidNumeric = [];

for (const val of apiData) {
  const asString = String(val);
  const asBool = Boolean(val);
  const asNumber = Number(val);

  console.log('Original:', val, '| String ->', asString, '| Boolean ->', asBool, '| Number ->', asNumber);

  if (isNumericString(val)) {
    validNumeric.push(Number(String(val).trim()));
  } else {
    invalidNumeric.push({ value: val, reason: (() => {
      if (val === null) return 'null';
      if (val === undefined) return 'undefined';
      if (String(val).trim() === '') return 'blank';
      if (String(val).toLowerCase() === 'nan') return 'literal NaN';
      return 'non-numeric string';
    })()});
  }
}

// Detailed report
console.log('\n=== Dynamic Data Parser Report ===');
console.log('Valid numeric values:', validNumeric);
console.log('Invalid entries:', invalidNumeric);
console.log('Summary: total entries', apiData.length, '| valid numbers', validNumeric.length, '| invalid', invalidNumeric.length);
