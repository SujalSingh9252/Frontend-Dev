// Assignment 9: Library Fine Calculator
// Purpose: Compute library fines for multiple late-return books using a tiered per-day rate,
// and apply an additional penalty if user has more than 3 delayed returns.
// Console-based. Edit the 'lateDaysArray' to represent multiple borrowed books.

// ----- Sample inputs (edit these) -----
let lateDaysArray = [2, 7, 12, 1]; // array where each element is days late for a book
// --------------------------------------

// Fine rules per book per day
function fineForDays(d) {
  if (d >= 1 && d <= 5) return d * 10;
  if (d >= 6 && d <= 10) return d * 20;
  if (d >= 11) return d * 50;
  return 0;
}

// Calculate total fine and details
let totalFine = 0;
let details = [];
for (let i = 0; i < lateDaysArray.length; i++) {
  let days = lateDaysArray[i];
  let fine = fineForDays(days);
  totalFine += fine;
  details.push({bookIndex: i+1, daysLate: days, fine: fine});
}

// Additional penalty if more than 3 delayed returns
let additionalPenalty = (lateDaysArray.length > 3) ? 200 : 0;
totalFine += additionalPenalty;

// Output detailed summary
console.log('--- Library Fine Calculator ---');
details.forEach(d => {
  console.log('Book #' + d.bookIndex + ': Days late = ' + d.daysLate + ', Fine = ₹' + d.fine.toFixed(2));
});
console.log('Additional penalty (more than 3 delayed returns): ₹' + additionalPenalty.toFixed(2));
console.log('Total fine to pay: ₹' + totalFine.toFixed(2));
