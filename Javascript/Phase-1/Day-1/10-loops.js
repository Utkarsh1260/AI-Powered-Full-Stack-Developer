for (let i = 0; i < 5; i++) {
    console.log(i);
}



let count = 0;

while (count < 5) {
    console.log(count);
    count++;
}


let number = 10;

do {
    console.log(number);
    number++;
} while (number < 5);



const users = ["Aman", "Rahul", "Utkarsh"];

for (const user of users) {
    console.log(user);
}


const user = {
    name: "Utkarsh",
    age: 21
};

for (const key in user) {
    console.log(key, user[key]);
}