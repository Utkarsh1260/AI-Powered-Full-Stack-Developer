/*
===========================================================
09 — MINI PROJECTS
===========================================================

1. To-Do List
2. Shopping Cart
3. Word Frequency Counter

These combine functions + arrays + objects + methods.
*/


// =========================================================
// PROJECT 1 — TODO LIST
// =========================================================

let todos = [];


function addTodo(task) {

    todos.push({

        id: todos.length + 1,

        task: task,

        done: false

    });

}


function completeTodo(id) {

    const todo = todos.find(
        todo => todo.id === id
    );

    if (todo) {

        todo.done = true;

    }

}


function removeTodo(id) {

    todos = todos.filter(
        todo => todo.id !== id
    );

}


function showTodos() {

    todos.forEach(todo => {

        console.log(

            `${todo.id}. ` +
            `[${todo.done ? "x" : " "}] ` +
            `${todo.task}`

        );

    });

}


addTodo("Learn JavaScript");

addTodo("Practice Arrays");

addTodo("Build Project");

completeTodo(1);

showTodos();


// =========================================================
// PROJECT 2 — SHOPPING CART
// =========================================================

let cart = [];


function addItem(
    name,
    price,
    quantity = 1
) {

    const existing = cart.find(
        item => item.name === name
    );


    if (existing) {

        existing.quantity += quantity;

    } else {

        cart.push({

            name,
            price,
            quantity

        });

    }

}


function removeItem(name) {

    cart = cart.filter(
        item => item.name !== name
    );

}


function getTotal() {

    return cart.reduce(

        (total, item) => {

            return total +
                item.price * item.quantity;

        },

        0

    );

}


function showCart() {

    cart.forEach(item => {

        console.log(

            `${item.name} x${item.quantity} = ₹` +
            `${item.price * item.quantity}`

        );

    });

    console.log(
        "Total:", getTotal()
    );

}


addItem("Notebook", 50, 2);

addItem("Pen", 10, 5);

addItem("Notebook", 50);

showCart();


// =========================================================
// PROJECT 3 — WORD FREQUENCY
// =========================================================

function wordFrequency(text) {

    const words =
        text.toLowerCase().split(/\s+/);

    const frequency = {};


    words.forEach(word => {

        frequency[word] =
            (frequency[word] || 0) + 1;

    });


    return frequency;

}


const text =
    "the quick brown fox jumps over the lazy dog the fox is quick";


console.log(
    wordFrequency(text)
);