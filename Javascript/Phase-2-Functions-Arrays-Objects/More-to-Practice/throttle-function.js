function throttle(callback,delay){
 let lastCall=0;

 return function(...args){
    let now = Date.now();

    if(now - lastCall >= delay){
        lastCall=now;
        callback(...args);
    }
 }
}


function search(value){
    console.log("Searching", value);
}

const goodSearch=throttle(search,1000);



goodSearch("o");
goodSearch("op");
goodSearch("opt");
goodSearch("opti");
goodSearch("optim");