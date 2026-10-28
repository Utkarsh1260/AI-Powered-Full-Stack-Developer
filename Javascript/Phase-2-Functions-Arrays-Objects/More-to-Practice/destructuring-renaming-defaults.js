// ArraY Destructuring
let nums=[1,2,3,4,5];
let [a,b,c,d,e]=nums // array destructuring
console.log(a,b,c,d,e)

let [l, ,n] = nums;  /* will skip value 2 of nums */
console.log(l, n);

// Array destructuring with defaults
let [x, y, z = 100] = [10, 20];
console.log(x, y, z); // 10 20 100





// Object Destructuring
let data={
    name:"Rahul",
    age:55,
    height:5.5,
    hair:"red"
};

let {name,age,height}=data; /* works like name=data.name */
console.log(name,age,height)

// Object destructuring with renaming
let { name: userName, age: userAge } = data;
console.log(userName, userAge); // Rahul 55

// Object destructuring with defaults
let { city = "Jabalpur", country = "India" } = data;
console.log(city, country); // Jabalpur India



