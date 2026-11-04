let prompt=require("prompt-sync")();

function recPower(n,m){
if(m===0) return 1;

return n*recPower(n,m-1)

}


let n=Number(prompt("Enter the base: "));
let m=Number(prompt("Enter the exponent: "));


let result= recPower(n,m);
console.log(result);
