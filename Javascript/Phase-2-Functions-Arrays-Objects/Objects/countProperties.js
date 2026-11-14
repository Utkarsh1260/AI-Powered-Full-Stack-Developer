function countProperties(obj){
 return  Object.keys(obj).length;
}

let student = {
    name: "Utkarsh",
    age: 22,
    course: "B.Tech",
    city: "Jabalpur"
};




console.log(countProperties(student));