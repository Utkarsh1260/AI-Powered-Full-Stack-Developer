
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Complete matrix:", matrix);



console.log(matrix[0][0]); // 1 (row 0, column 0)
console.log(matrix[1][2]); // 6 (row 1, column 2)
console.log(matrix[2][1]); // 8 (row 2, column 1)




for (let row of matrix) {
    for (let val of row) {
        console.log(val);
    }
}




console.log("First row:", matrix[0]);  
console.log("Second row:", matrix[1]); 



for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`Row ${i}, Column ${j}: ${matrix[i][j]}`);
    }
}


let sum = 0;

for (let row of matrix) {
    for (let val of row) {
        sum += val;
    }
}

console.log("Sum of all elements:", sum); // 45


for (let i = 0; i < matrix.length; i++) {
    let rowSum = 0;

    for (let val of matrix[i]) {
        rowSum += val;
    }

    console.log(`Sum of row ${i}:`, rowSum);
}

