let users = [
    { name: "Utkarsh", age: 22 },
    { name: "Rahul", age: 20 },
    { name: "Aman", age: 22 },
    { name: "Harsh", age: 21 },
    { name: "Rohit", age: 20 },
    { name: "Mohit", age: 22 }
];

let groupedUsers={};

users.forEach((user)=>{
    if(groupedUsers[user.age]) groupedUsers[user.age].push(user);
    else groupedUsers[user.age]=[user];
});

console.log(groupedUsers);