// Assignment 3: Cinema Ticketing System
// Purpose: Compute movie ticket pricing with discounts and service fees.
// Console-based. Edit inputs below and refresh to see results.

// ----- Sample inputs (edit these) -----
let showTime = 'evening'; // 'morning' or 'evening'
let tickets = 4;          // number of tickets being booked
let isStudent = false;
let age = 65;             // customer's age
// --------------------------------------

// Prices and rules
const PRICES = { 'morning': 120, 'evening': 180 };
const STUDENT_DISCOUNT = 0.10; // 10%
const SENIOR_DISCOUNT = 0.20;  // age > 60
const SERVICE_FEE_THRESHOLD = 3;
const SERVICE_FEE = 50;

// Input validation
if (!PRICES.hasOwnProperty(showTime)) {
  console.error('Invalid showTime. Use "morning" or "evening".');
} else {
  let basePricePerTicket = PRICES[showTime];
  let basePrice = basePricePerTicket * tickets;

  // Determine discount
  let discountRate = 0;
  if (isStudent) discountRate = STUDENT_DISCOUNT;
  else if (age > 60) discountRate = SENIOR_DISCOUNT;

  let discountedTotal = basePrice * (1 - discountRate);

  // Service fee if more than threshold tickets
  let serviceFee = (tickets > SERVICE_FEE_THRESHOLD) ? SERVICE_FEE : 0;
  let finalAmount = discountedTotal + serviceFee;

  // Output
  console.log('--- Cinema Ticketing System ---');
  console.log('Show time:', showTime);
  console.log('Tickets:', tickets);
  console.log('Base price: ₹' + basePrice.toFixed(2));
  console.log('Discount rate (%):', (discountRate*100).toFixed(2));
  console.log('Discounted total: ₹' + discountedTotal.toFixed(2));
  console.log('Service fee: ₹' + serviceFee.toFixed(2));
  console.log('Final amount to pay: ₹' + finalAmount.toFixed(2));
}
