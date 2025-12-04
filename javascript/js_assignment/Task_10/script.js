// Assignment 10: Random Coupon Generator
// Purpose: Generate a random coupon number (1-100) and map it to discount messages.
// If the random number is prime, apply an extra bonus message.
// Console-based. Refresh the page to generate a new coupon.

// Helper: check if a number is prime
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

// Generate random integer between min and max inclusive
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate coupon
let couponNumber = randomInt(1, 100);
let message;
if (couponNumber <= 30) message = 'You won a 10% discount';
else if (couponNumber <= 60) message = 'You won a 20% discount';
else if (couponNumber <= 90) message = 'You won a 30% discount';
else message = 'You won a 50% Mega Offer!';

// Output
console.log('--- Random Coupon Generator ---');
console.log('Coupon number:', couponNumber);
console.log(message);

// Prime number bonus
if (isPrime(couponNumber)) {
  console.log('Prime number bonus applied!');
}
