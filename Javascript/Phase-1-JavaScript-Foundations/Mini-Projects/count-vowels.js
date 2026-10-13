let prompt=require('prompt-sync');

let str=prompt("Enter string");

let vowels = "aeiou";
let count = 0;

for (let char of str) {
    if (vowels.includes(char)) count++;
}

console.log(`Number of vowels: ${count}`);