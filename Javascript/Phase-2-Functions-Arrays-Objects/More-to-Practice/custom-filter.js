Array.prototype.myFilter=function (callback){
    let result=[];

    for(let i=0; i< this.length; i++){
      if(callback(this[i],i,this)){result.push(this[i])};
    }

    return result;
}

let arr=[1,2,3,4,5];

let output=arr.myFilter((num) =>{
       return num % 2 === 0;
});

console.log(output);