const prompt = require("prompt-sync")();

var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<nums.length; j++){
            
            if(nums[i] + nums[j] === target && i != j){
                return [i,j];
            };
        };
    };
};


let nums = prompt("Enter array values separated by commas: ");
nums = nums.split(",").map(Number);

let target = Number(prompt("Enter target sum: "));

console.log(twoSum(nums, target));