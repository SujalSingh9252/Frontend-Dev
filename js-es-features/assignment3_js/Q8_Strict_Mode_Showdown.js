// Q8 - Strict Mode Showdown
// Demonstrates difference when running with and without 'use strict'.
// The code below will throw in strict mode because duplicate parameter names are not allowed,
// and attempting to delete a non-configurable identifier also fails.

(function runDemo(useStrict = true) {
  if (useStrict) {
    'use strict';
  }
  function demo(a, b) {
    // invalid in strict: function demo(a, a) { ... } -> duplicate param names disallowed
    // Assigning to undeclared variable would also throw in strict ('total = 10';)
    var total = 10;
    // delete total; // deleting a variable is not allowed (will return false); in strict mode it's a SyntaxError to delete an unqualified identifier
    console.log('demo executed. total =', total);
  }
  try {
    demo(5, 10);
    console.log('Ran demo with useStrict=', useStrict);
  } catch (err) {
    console.error('Error (useStrict=' + useStrict + '):', err.message);
  }
})(false); // without strict
(function(){ 'use strict'; try { function demo2(a,a){ } demo2(1,2); } catch(e){ console.error('Strict mode duplicate param error:', e.message); } })();
