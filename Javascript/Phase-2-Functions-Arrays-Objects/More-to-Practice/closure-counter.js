function addOne(){
    let counter=0;

    return function(m){
        counter++;
     return  counter;
    }
}

let result=addOne();

console.log(result()); // 1
console.log(result()); // 2
console.log(result()); // 3
console.log(result()); // 4
console.log(result()); // 5