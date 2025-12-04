// Assignment 7: Restaurant Billing with Tips
// Purpose: Compute taxes, service charge, recommended tip and final total.
// Console-based. Edit inputs below to test scenarios.

// ----- Sample inputs (edit these) -----
let baseFoodCost = 1800; // ₹
let diningIn = true;     // true for dining in, false for takeaway
// --------------------------------------

// Tax rules
const GST_RATE = 0.05; // 5%
const SERVICE_TAX_RATE = 0.10; // 10% for dining in
const RECOMMENDED_TIP_RATE = 0.08; // 8% if total bill > ₹2000 (before tip)
const TIP_THRESHOLD = 2000; // ₹

// Calculate GST
let gst = baseFoodCost * GST_RATE;

// Service tax only if dining in
let serviceTax = diningIn ? (baseFoodCost * SERVICE_TAX_RATE) : 0;

// Subtotal before tip
let subtotal = baseFoodCost + gst + serviceTax;

// Recommended tip condition
let tip = 0;
if (subtotal > TIP_THRESHOLD) {
  tip = subtotal * RECOMMENDED_TIP_RATE;
}

// Final total
let finalTotal = subtotal + tip;

// Output summary with details
console.log('--- Restaurant Billing with Tips ---');
console.log('Base amount: ₹' + baseFoodCost.toFixed(2));
console.log('GST (5%): ₹' + gst.toFixed(2));
console.log('Service tax (' + (diningIn ? '10% - dining in' : '0% - takeaway') + '): ₹' + serviceTax.toFixed(2));
console.log('Recommended tip: ₹' + tip.toFixed(2));
console.log('Final total: ₹' + finalTotal.toFixed(2));
