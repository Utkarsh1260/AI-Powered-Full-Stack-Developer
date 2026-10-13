let prompt=require('prompt-sync')();

console.log("Select the Convertion you want :");
console.log("Press 1 to convert temperature from Fahrenheit to Celsius");
console.log("Press 2 to convert temperature from Celsius to Fahrenheit");
console.log("\n");
let input=Number(prompt("Enter your choice: "));


if(input==1) farToCel();
else if (input==2) celToFar();
else console.log("Invalid Choice");

function celToFar(){
    let cel=Number(prompt("Enter the temperature: "));
    let result=(cel*9/5)+32;
    console.log(`${result.toFixed(2)} F`)
}

function farToCel(){
    let far=Number(prompt("Enter the temperature: "));
    let result=(far-32)*5/9;
    console.log(`${result.toFixed(2)} C`)
}