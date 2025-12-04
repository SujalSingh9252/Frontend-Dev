'use strict';
// Q6 - Pyramid Pattern Generator
// Generates a pyramid of '*' using a loop. Demonstrates var vs let.

function generatePyramid(rows = 4) {
  for (let i = 1; i <= rows; i++) {
    let line = '';
    for (let j = 0; j < i; j++) {
      line += '* ';
    }
    console.log(line.trim());
  }
}

console.log('Default pyramid:');
generatePyramid(4);

// If we replace let with var inside loops, variables are function-scoped and can lead to unexpected reuse.
// Example (for demonstration only):
function generatePyramidWithVar(rows = 4) {
  for (var i = 1; i <= rows; i++) {
    var line = '';
    for (var j = 0; j < i; j++) {
      line += '* ';
    }
    console.log(line.trim());
  }
}
console.log('\nPyramid using var (behaviour similar here but scoping differs):');
generatePyramidWithVar(4);
