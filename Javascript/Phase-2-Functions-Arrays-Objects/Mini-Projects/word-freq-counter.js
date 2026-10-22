
let prompt = require("prompt-sync")();

let sentence = prompt("Enter the word: ");

let word = sentence.split(" ");

let map =new Map();

for (let i = 0; i < word.length; i++) {
    if(map.has(word[i])) continue;
  let count = 1;
  for (let j = i + 1; j < word.length; j++) {
    if (word[i] === word[j]) count++;
  }
map.set(word[i], count);
}

console.log("Frequency of each word is:");
console.log(map);
