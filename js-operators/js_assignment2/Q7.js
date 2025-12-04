// Q7: Customer Feedback Processor
let feedback="Great product! Fast delivery and amazing sound quality!";
let words=feedback.split(" ").length;
let hasNeg=feedback.toLowerCase().includes("bad")||feedback.toLowerCase().includes("poor");
console.log("Words:",words, hasNeg?"Needs Improvement":"Positive Feedback");
