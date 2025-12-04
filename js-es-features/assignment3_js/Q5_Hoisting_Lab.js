'use strict';
// Q5 - Hoisting Lab: The Sequence Trap
// Original snippet had hoisting surprises. We'll explain and then provide corrected code.

// Prediction:
// console.log(score); // undefined because var score is hoisted (declaration) but not initialized
// announce(); // works because function declarations are hoisted
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready";
// startGame(); // ReferenceError: Cannot access 'status' before initialization because let is in TDZ
// function startGame() { console.log(status); }

// Corrected version:
var score = 50;
function announce() { console.log("Game started"); }
announce();
console.log('score:', score);

let status = "ready";
function startGame() { console.log('status:', status); }
startGame();

// Arrow function rewrite (note: function declarations hoist, arrow assigned to const/let do not hoist)
const announceArrow = () => console.log('Game started (arrow)');
announceArrow();
