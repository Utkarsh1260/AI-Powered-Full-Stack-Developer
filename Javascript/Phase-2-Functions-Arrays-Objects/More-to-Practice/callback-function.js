function greet(name, callback){
    console.log(`Hello ${name}`);
    callback();
}


// here byBye() is the callback function passed to greet() function as argument
function byBye(){
    console.log("Byeeee");
}

greet("Utkarsh", byBye);
