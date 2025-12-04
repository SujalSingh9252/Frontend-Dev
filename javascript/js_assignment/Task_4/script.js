// Assignment 4: Marks Analyzer
// Purpose: Analyze student marks for five subjects: average, percentage, grade, and pass/fail policies.
// If the student fails in two or more subjects, print "Repeat Year" regardless of average.
// Console-based. Edit the marks array below to test different cases.

// ----- Sample inputs (edit these) -----
let marks = [88, 76, 54, 39, 92]; // Five subject marks (0-100)
// --------------------------------------

// Basic checks
if (!Array.isArray(marks) || marks.length !== 5) {
  console.error('Please provide an array "marks" with exactly 5 numeric entries (0-100).');
} else {
  // Calculate total and average
  let total = 0;
  let failCount = 0;
  for (let i = 0; i < marks.length; i++) {
    let m = Number(marks[i]);
    total += m;
    if (m < 40) failCount++;
  }
  let average = total / marks.length;
  let percentage = (total / (marks.length * 100)) * 100; // same as average but explicit

  // Determine grade
  let grade;
  if (average >= 90) grade = 'A+';
  else if (average >= 75) grade = 'A';
  else if (average >= 60) grade = 'B';
  else if (average >= 40) grade = 'C';
  else grade = 'Fail';

  console.log('--- Marks Analyzer ---');
  console.log('Marks:', marks.join(', '));
  console.log('Total:', total.toFixed(2));
  console.log('Average:', average.toFixed(2));
  console.log('Percentage:', percentage.toFixed(2) + '%');
  console.log('Grade:', grade);
  console.log('Failed subjects count:', failCount);

  if (failCount >= 2) {
    console.log('Remark: Repeat Year');
  } else if (grade === 'Fail') {
    console.log('Remark: Fail');
  } else {
    console.log('Remark: Promoted');
  }
}
