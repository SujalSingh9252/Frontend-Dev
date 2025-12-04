// Assignment 1: E-Commerce Delivery Estimator
// Purpose: Compute total cost (including delivery fee rules) and estimated delivery time.
// This script is console-based. Change the sample input variables below and refresh the page to test.

// ----- Sample inputs (edit these) -----
let orderAmount = 420; // amount in ₹
let isPremium = false; // true if user is premium member
let isRemote = true; // true if the delivery address is remote
// --------------------------------------

// Constants and rules
const DELIVERY_FEE_THRESHOLD = 500; // ₹
const DELIVERY_FEE_AMOUNT = 50; // ₹
const BASE_DELIVERY_DAYS = 3;
const REMOTE_EXTRA_DAYS = 2;

// Calculate delivery fee
// Rule: If order < threshold, add fee; but premium members waive delivery fee.
let deliveryFee = 0;
if (!isPremium && orderAmount < DELIVERY_FEE_THRESHOLD) {
  deliveryFee = DELIVERY_FEE_AMOUNT;
}

// Calculate total cost
let totalCost = orderAmount + deliveryFee;

// Calculate estimated delivery time
let estimatedDays = BASE_DELIVERY_DAYS + (isRemote ? REMOTE_EXTRA_DAYS : 0);

// Output the results to the console
console.log("--- E-Commerce Delivery Estimator ---");
console.log("Order amount: ₹" + orderAmount.toFixed(2));
console.log("Premium member:", isPremium);
console.log("Remote address:", isRemote);
console.log("Delivery fee applied: ₹" + deliveryFee.toFixed(2));
console.log("Total cost (including delivery): ₹" + totalCost.toFixed(2));
console.log("Estimated delivery time:", estimatedDays + " day(s)");
