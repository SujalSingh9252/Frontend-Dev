// Q9: Odd–Even Number Analyzer
let arr=[],res=[];
for(let i=1;i<=30;i++) arr.push(i);
for(const n of arr){
  if(n%3===0 && n%5===0) res.push("FizzBuzz");
  else if(n%2===0) res.push("Even");
  else res.push("Odd");
}
console.log(res);
