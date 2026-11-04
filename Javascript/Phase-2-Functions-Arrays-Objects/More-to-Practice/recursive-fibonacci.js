let prompt=require("prompt-sync")();

function recFibonacci(n,x,y){

 if(n===0) return;
 let sum=x+y;
 console.log(sum);

 return recFibonacci(n-1,x=y,y=sum)
}


let x=0;
let y=1;


let n=Number(prompt("How many terms to print: "));
console.log(x);
console.log(y);

recFibonacci(n-2,x,y);
