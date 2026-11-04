function executeTwice(callback){
    callback();
    callback();
}


function greet(){
    console.log("I am through callback")
}

executeTwice(greet);