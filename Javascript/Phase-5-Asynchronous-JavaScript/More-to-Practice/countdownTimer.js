
function greet(name){
  
    console.log(`Hello ${name}`);
}

setTimeout(()=> {greet("Utkarsh")}, 2000);

// setInterval(greet, 2000, "Utkarsh", "Ramu", "Aman", "Ajay");

//countdownTimer
let count=5;

let timer= setInterval(()=>{
    console.log(count);

    count--;

    if(count<0){
        clearInterval(timer);
          console.log("Time's Up! 🚀");
    }
},1000);