/*
===========================================================
08 — MULTI-DIMENSIONAL ARRAYS
===========================================================

Array containing other arrays.

Useful for:
- matrices
- grids
- game boards
- tables
*/


const matrix = [

    [1, 2, 3],

    [4, 5, 6],

    [7, 8, 9]

];


// =========================================================
// ACCESS VALUE
// =========================================================

// row 1, column 2

console.log(
    matrix[1][2]
);


// =========================================================
// LOOP THROUGH MATRIX
// =========================================================

for (let row of matrix) {

    for (let value of row) {

        console.log(value);

    }

}


// =========================================================
// CALCULATE TOTAL
// =========================================================

let total = 0;

for (let row of matrix) {

    for (let value of row) {

        total += value;

    }

}

console.log("Total:", total);


// =========================================================
// DOUBLE EVERY VALUE
// =========================================================

const doubledMatrix = matrix.map(
    row => {

        return row.map(
            value => value * 2
        );

    }
);

console.log(doubledMatrix);


// =========================================================
// SEARCH VALUE
// =========================================================

const target = 8;

let found = false;

for (let row of matrix) {

    for (let value of row) {

        if (value === target) {

            found = true;

        }

    }

}

console.log("Found:", found);


// Mental model:
//
// matrix[1]
//    ↓
// [4, 5, 6]
//
// matrix[1][2]
//    ↓
// 6