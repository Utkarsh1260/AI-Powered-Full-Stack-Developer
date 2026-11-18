function getUser(id, callback) {
    setTimeout(() => {
        callback({ id: id, name: "Utkarsh" });
    }, 500);
}

function getOrders(userId, callback) {
    setTimeout(() => {
        callback([{ orderId: 101, userId: userId }]);
    }, 500);
}

function getOrderDetails(order, callback) {
    setTimeout(() => {
        callback({ orderId: order.orderId, amount: 2500 });
    }, 500);
}

function processPayment(details, callback) {
    setTimeout(() => {
        callback({ orderId: details.orderId, status: "Paid" });
    }, 500);
}

function sendConfirmation(payment, callback) {
    setTimeout(() => {
        callback("Order confirmed successfully!");
    }, 500);
}

// Callback Hell begins here
getUser(1, (user) => {
    getOrders(user.id, (orders) => {
        getOrderDetails(orders[0], (details) => {
            processPayment(details, (payment) => {
                sendConfirmation(payment, (result) => {
                    console.log("Sab ho gaya:", result);
                    // Aur andar... aur andar... aur andar...
                });
            });
        });
    });
});