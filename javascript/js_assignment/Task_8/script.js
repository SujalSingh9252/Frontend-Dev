// Assignment 8: Employee Bonus Distribution
// Purpose: Calculate employee bonus based on rating and experience and apply caps.
// Console-based. Edit inputs below to test different employees.

// ----- Sample inputs (edit these) -----
let rating = 5;          // integer rating (1-5)
let experienceYears = 6; // years of experience
let baseSalary = 120000; // ₹
// --------------------------------------

// Bonus rates based on rating
const RATING_BONUSES = {5:0.20, 4:0.15, 3:0.10}; // in fractions
const EXTRA_EXPERIENCE_BONUS = 0.05; // +5% if experience > 5
const BONUS_CAP = 25000; // ₹ cap if baseSalary > 100000 (cap applies to total bonus amount)

// Determine base bonus rate
let baseBonusRate = RATING_BONUSES[rating] || 0;

// Add experience bonus if applicable
if (experienceYears > 5) {
  baseBonusRate += EXTRA_EXPERIENCE_BONUS;
}

// Calculate bonus amount
let calculatedBonus = baseSalary * baseBonusRate;

// Apply cap if base salary exceeds 100000
let cappedBonus = calculatedBonus;
if (baseSalary > 100000 && cappedBonus > BONUS_CAP) {
  cappedBonus = BONUS_CAP;
}

// Total salary after bonus
let totalSalary = baseSalary + cappedBonus;

// Output
console.log('--- Employee Bonus Distribution ---');
console.log('Base salary: ₹' + baseSalary.toFixed(2));
console.log('Rating:', rating);
console.log('Experience (years):', experienceYears);
console.log('Calculated bonus: ₹' + calculatedBonus.toFixed(2));
console.log('Capped final bonus (if applicable): ₹' + cappedBonus.toFixed(2));
console.log('Total salary after bonus: ₹' + totalSalary.toFixed(2));
