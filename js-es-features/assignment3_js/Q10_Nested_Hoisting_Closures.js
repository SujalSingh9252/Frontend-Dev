'use strict';
// Q10 - Nested Hoisting and Closures
// Predict: outer console.log(count) -> undefined (var count hoisted but not initialized), inner console.log(count) -> undefined (inner var count hoisted in inner scope)
// Let's run and explain.

function outer() {
  console.log('outer before declaration count:', count); // undefined due to hoisting of var count in outer
  var count = 5;
  function inner() {
    console.log('inner before declaration count:', count); // undefined because inner has its own var count hoisted
    var count = 10;
    console.log('inner after declaration count:', count); // 10
  }
  inner();
  console.log('outer after inner count:', count); // 5
}
outer();

// Arrow inner version
function outerArrow() {
  var count = 5;
  const inner = () => {
    // arrow does not create its own 'this' but hoisting behavior for var still applies for inner's own var
    var count = 10;
    console.log('arrow inner count:', count);
  };
  inner();
  console.log('outer count remains:', count);
}
outerArrow();

// Note: use debugger/VS Code to inspect call stack and variable environments.
console.log('Explanation: each function creates its own variable environment. var declarations are hoisted to top of their function scope and initialized with undefined before code runs.');
