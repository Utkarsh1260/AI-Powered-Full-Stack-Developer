
// ==========================================
// 1. CALLBACK HELL (PYRAMID OF DOOM)
// ==========================================

function getUser(callback) {
    setTimeout(() => {
        console.log("1. User details fetched");

        callback(null, { userId: 101, name: "Utkarsh" });
    }, 1000);
}

function getOrders(userId, callback) {
    setTimeout(() => {
        console.log("2. Orders fetched");

        callback(null, { orderId: 501, userId });
    }, 1000);
}

function getOrderDetails(orderId, callback) {
    setTimeout(() => {
        console.log("3. Order details fetched");

        callback(null, { orderId, amount: 2500 });
    }, 1000);
}

function processPayment(amount, callback) {
    setTimeout(() => {
        console.log("4. Payment processed");

        callback(null, { amount, status: "Success" });
    }, 1000);
}

function sendConfirmation(payment, callback) {
    setTimeout(() => {
        console.log("5. Confirmation sent");

        callback(null, "Order completed successfully!");
    }, 1000);
}

// Nested callbacks
function callbackHell() {
    console.log("\n--- CALLBACK HELL ---");

    getUser((error, user) => {
        if (error) return console.log(error);

        getOrders(user.userId, (error, order) => {
            if (error) return console.log(error);

            getOrderDetails(order.orderId, (error, details) => {
                if (error) return console.log(error);

                processPayment(details.amount, (error, payment) => {
                    if (error) return console.log(error);

                    sendConfirmation(payment, (error, message) => {
                        if (error) return console.log(error);

                        console.log(message);
                    });
                });
            });
        });
    });
}


// ==========================================
// 2. PROMISE CHAINING
// ==========================================

function getUserPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("1. User details fetched");

            resolve({ userId: 101, name: "Utkarsh" });
        }, 1000);
    });
}

function getOrdersPromise(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("2. Orders fetched");

            resolve({ orderId: 501, userId });
        }, 1000);
    });
}

function getOrderDetailsPromise(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("3. Order details fetched");

            resolve({ orderId, amount: 2500 });
        }, 1000);
    });
}

function processPaymentPromise(amount) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("4. Payment processed");

            resolve({ amount, status: "Success" });
        }, 1000);
    });
}

function sendConfirmationPromise(payment) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("5. Confirmation sent");

            resolve("Order completed successfully!");
        }, 1000);
    });
}

function promiseChaining() {
    console.log("\n--- PROMISE CHAINING ---");

    getUserPromise()
        .then(user => getOrdersPromise(user.userId))
        .then(order => getOrderDetailsPromise(order.orderId))
        .then(details => processPaymentPromise(details.amount))
        .then(payment => sendConfirmationPromise(payment))
        .then(message => console.log(message))
        .catch(error => console.log("Error:", error));
}


// ==========================================
// 3. ASYNC / AWAIT
// ==========================================

async function asyncAwait() {
    console.log("\n--- ASYNC / AWAIT ---");

    try {
        const user = await getUserPromise();

        const order = await getOrdersPromise(user.userId);

        const details = await getOrderDetailsPromise(order.orderId);

        const payment = await processPaymentPromise(details.amount);

        const message = await sendConfirmationPromise(payment);

        console.log(message);

    } catch (error) {
        console.log("Error:", error);
    }
}


// ==========================================
// RUN ALL THREE APPROACHES SEQUENTIALLY
// ==========================================

async function main() {

    // 1. Callback Hell
    await new Promise(resolve => {
        callbackHell();

        setTimeout(resolve, 5100);
    });

    // 2. Promise Chaining
    await new Promise(resolve => {
        promiseChaining();

        setTimeout(resolve, 5100);
    });

    // 3. Async / Await
    await asyncAwait();

}

main();
