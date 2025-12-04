// Assignment 6: Game Reward System
// Purpose: Compute coins earned and rank based on level, performance, and missions completed.
// Console-only. Edit inputs below to simulate different players.

// ----- Sample inputs (edit these) -----
let level = 12;
let performanceScore = 20; // numeric score from gameplay
let missionsCompleted = true; // boolean
// --------------------------------------

// Formula: coins = (level * 50) + (performanceScore * 10)
let baseCoins = (level * 50) + (performanceScore * 10);
let coins = baseCoins;

// If player completed all missions, double the coins
if (missionsCompleted === true) {
  coins = coins * 2;
}

// Assign rank
let rank = (coins > 1000) ? 'Elite' : 'Regular';

// Output neatly
console.log('--- Game Reward System ---');
console.log('Level:', level);
console.log('Performance score:', performanceScore);
console.log('Missions completed:', missionsCompleted);
console.log('Base coins (before completion bonus):', baseCoins);
console.log('Final coins awarded:', coins);
console.log('Assigned rank:', rank);
