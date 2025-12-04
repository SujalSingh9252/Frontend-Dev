// Q1: Scope Conflict Resolver
let bonus = 5000; // global bonus

function calculateSalary(isPermanent){
  let salary = 40000; // local
  if(isPermanent){
    salary += bonus;
  }
  console.log("Is Permanent:", isPermanent, "Total Salary:", salary);
}

calculateSalary(true);
calculateSalary(false);
console.log("Global bonus still:", bonus);
