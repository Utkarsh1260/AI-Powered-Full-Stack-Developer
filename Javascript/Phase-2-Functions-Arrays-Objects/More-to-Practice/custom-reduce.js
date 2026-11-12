Array.prototype.myReduce=function(callback, initialValue){
    let accumulator = initialValue;

    for(let i=0; i<this.length; i++){
        accumulator=callback(accumulator,this[i],i,this);
    }

    return accumulator;
}


let nums = [1, 2, 3, 4];


let sum = nums.myReduce((acc, n) => 
{return acc+n;},0);

console.log(sum);