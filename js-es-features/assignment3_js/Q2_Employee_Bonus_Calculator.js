'use strict';
// Q2 - Employee Bonus Calculator
// Convert strings to numbers, compute bonuses with try/catch to handle missing properties.

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

for (const emp of employees) {
  try {
    if (!emp.name) throw new Error('Missing name property');
    if (!emp.salary) throw new Error('Missing salary property');
    if (!emp.years) throw new Error('Missing years property');

    const salary = Number(emp.salary);
    const years = Number(emp.years);
    if (Number.isNaN(salary) || Number.isNaN(years)) throw new Error('Invalid numeric conversion');

    const bonus = years > 3 ? salary * 0.10 : salary * 0.05;
    const total = salary + bonus;

    console.log(`Employee: ${emp.name} | Salary: ₹${salary.toFixed(2)} | Years: ${years} | Bonus: ₹${bonus.toFixed(2)} | Total: ₹${total.toFixed(2)}`);
  } catch (err) {
    console.error('Error processing employee record:', emp, '|', err.message);
  }
}
