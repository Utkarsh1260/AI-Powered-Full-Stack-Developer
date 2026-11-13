
function double(num) {
    return num * 2;
}

function addFive(num) {
    return num + 5;
}

function square(num) {
    return num * num;
}

let result = square(addFive(double(5)));

console.log(result);
