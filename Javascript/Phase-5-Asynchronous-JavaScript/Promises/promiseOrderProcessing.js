function getUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: id, name: "Utkarsh" });
        }, 1000);
    });
}

function getOrders(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{ orderId: 101, userId: userId }]);
        }, 1000);
    });
}

function getOrderDetails(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ orderId: order.orderId, amount: 2500 });
        }, 1000);
    });
}

function processPayment(details) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ orderId: details.orderId, status: "Paid" });
        }, 1000);
    });
}

function sendConfirmation(payment) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order confirmed successfully!");
        }, 1000);
    });
}

// Promise Chaining
getUser(1)
    .then((user) => getOrders(user.id))
    .then((orders) => getOrderDetails(orders[0]))
    .then((details) => processPayment(details))
    .then((payment) => sendConfirmation(payment))
    .then((result) => console.log("Sab ho gaya:", result))
    .catch((error) => console.log("Kahin bhi error aaya toh yahan:", error));