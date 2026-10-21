let prompt=require('prompt-sync')();


let a=Number(prompt("Enter first value: "));
let b=Number(prompt("Enter second value: "));


sumD(a,b);
// sE(a,b);  ReferenceError: Cannot access 'sE' before initialization
// aF(a,b); ReferenceError: Cannot access 'sF' before initialization

//function declaration
function sumD(a,b){
    console.log("from function declaration:");
    console.log(a+b);
}

//function expression
let sE= function (){
    console.log("from function expression:");
    console.log(a+b);
}
sE(a,b);

const aF = (a,b)=> console.log(a+b);
console.log("from arrow function:");
aF(a,b);