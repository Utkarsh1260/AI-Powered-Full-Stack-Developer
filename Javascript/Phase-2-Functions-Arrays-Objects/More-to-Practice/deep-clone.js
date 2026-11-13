function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  let result = Array.isArray(obj) ? [] : {};

  for(let key in obj){
    if(Object.hasOwn(obj, key)){
        result[key]=deepClone(obj[key]);
    }
  }

  return result;
}

let user = {
  name: "Utkarsh",
  age: 22,
  address: {
    city: "Jabalpur",
    state: "MP",
  },
  skills: ["JavaScript", "React", "Node.js"],
  projects: [
    { name: "ShopSecure", status: "Completed" },
    { name: "Todo App", status: "Ongoing" },
  ],
};

let clonedUser = deepClone(user);

clonedUser.age = 40;

console.log(user);
console.log(clonedUser);
