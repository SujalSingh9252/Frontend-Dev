// Q6: Event-Based Counter Simulation
let count=0;
function increment(){
  function inner(){ count++; }
  inner();
  console.log("Count:",count);
}
function decrement(){
  function inner(){ count--; }
  inner();
  console.log("Count:",count);
}
increment();increment();decrement();
