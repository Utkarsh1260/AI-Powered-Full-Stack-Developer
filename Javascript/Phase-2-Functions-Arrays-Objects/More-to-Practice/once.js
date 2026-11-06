function once(callback){
    let executed=false;

    return function(...args){
        if(!executed){
executed=true;
        
        callback(...args);
        }
    };
}


function greet(name){
    console.log("Hello ",name);
}

let greetOnce=once(greet);

greetOnce("Utkarsh");
greetOnce("Harsh");
greetOnce("Mars");