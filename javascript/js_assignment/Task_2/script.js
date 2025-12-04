// Assignment 2: Banking Interest Calculator
// Purpose: Compute final balance after given years for savings or fixed deposit accounts,
// including bonus interest for large deposits.
// Console-based. Edit the input variables and refresh to test.

// ----- Sample inputs (edit these) -----
let accountType = 'fixed'; // 'savings' or 'fixed'
let amount = 150000;       // ₹
let years = 3;             // number of years
// --------------------------------------

// Base interest rates
const RATES = {
  'savings': 4.0,
  'fixed': 6.5
};
const BONUS_THRESHOLD = 100000; // ₹
const BONUS_RATE = 1.0;         // extra percent

// Validate account type
if (!RATES.hasOwnProperty(accountType)) {
  console.error('Invalid accountType. Use "savings" or "fixed".');
} else {
  // Determine base rate and add bonus if applicable
  let rate = RATES[accountType];
  if (amount > BONUS_THRESHOLD) {
    rate += BONUS_RATE;
  }

  // Compound interest formula: total = amount * (1 + rate/100)^years
  let total = amount * Math.pow((1 + rate/100), years);

  // Output results, rounded to two decimals
  console.log('--- Banking Interest Calculator ---');
  console.log('Account type:', accountType);
  console.log('Principal amount: ₹' + amount.toFixed(2));
  console.log('Rate applied (%):', rate.toFixed(2));
  console.log('Years:', years);
  console.log('Final balance: ₹' + total.toFixed(2));
}
