'use strict';
// Q4 - Debugging Mystery
// The original code fails because in strict mode assigning to an undeclared variable throws a ReferenceError.
// Fix: declare the variable with let/var/const.

function showMessage() {
  // greeting = "Welcome"; // would throw in strict mode because greeting is undeclared
  let greeting = "Welcome"; // properly declared in function scope
  console.log('Greeting:', greeting);
}
showMessage();

// Explanation logged:
console.log('Under "use strict", creating implicit globals is disallowed. Declaring variables with let/const/var prevents ReferenceError.');
