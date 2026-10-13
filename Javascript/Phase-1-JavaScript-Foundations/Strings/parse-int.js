let value = "500px";

let result = parseInt(value);

console.log(result);
console.log(typeof result);

// parseInt() reads the string from the beginning and extracts the integer until it encounters a character that cannot be part of the number. Therefore, "500px" becomes 500, with the data type number.