function memoizedFact() {
  let factList = {};
 

  return function(n){
    if(n in factList){
        console.log("Fetched from factList");
        return factList[n];
    }

   console.log("Calculating");
   let fact = 1;
   let m=n;
  while (m > 0) {
    fact = fact * m;
    --m;
  }
 
  factList[n]=fact;
  return factList[n];
  }


 


}

let facto = memoizedFact();

console.log(facto(5));
console.log(facto(5));
console.log(facto(5));
console.log(facto(3));
console.log(facto(3));
console.log(facto(3));
console.log(facto(6));
