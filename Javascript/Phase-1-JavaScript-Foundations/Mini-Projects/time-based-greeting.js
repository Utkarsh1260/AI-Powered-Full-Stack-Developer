let date = new Date();

let hour = date.getHours();
let minutes = date.getMinutes();

console.log(`Current Time: ${hour}:${String(minutes).padStart(2, "0")}`);

if (hour < 12) {
    console.log("Good Morning");
} else if (hour < 17) {
    console.log("Good Afternoon");
} else {
    console.log("Good Evening");
}