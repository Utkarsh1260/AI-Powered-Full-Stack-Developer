Array.prototype.myMap=function (callback){

    let result=[];

    for(let i=0; i<this.length; i++){
        result.push(callback(this[i], i, this));
    };
    return result;
};

let arr=[1,2,3,4,5];

let output=arr.myMap((num) =>{
    return num*2;
});

console.log(output);

console.log(arr.__proto__.__proto__)