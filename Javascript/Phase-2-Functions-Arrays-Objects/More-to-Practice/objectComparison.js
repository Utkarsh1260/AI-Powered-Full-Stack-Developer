const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };


const obj3 = { a: 0, b: 2 };
const obj4 = { a: 1, b: 2 };


function compareObjects(obj1,obj2){
  let k1=Object.keys(obj1);
  let k2=Object.keys(obj2);

  if(k1.length !== k2.length) return false;

  for(let key of k1){
    if(obj1[key] !==obj2[key]) return false;
  }

  return true;
}

console.log(compareObjects(obj1,obj2));