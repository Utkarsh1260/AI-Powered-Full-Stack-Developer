let user = {
    name: "Utkarsh",
    age: 22
};

let address = {
    city: "Jabalpur",
    state: "Madhya Pradesh"
};

let mergedObject = {
    ...user,
    ...address
};

console.log(mergedObject);