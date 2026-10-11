// Mini Project: E-commerce Order Validator 🛒

const orders = [
  { customer: "Utkarsh", amount: 1200, status: "Pending" },
  { customer: "Rahul", amount: 300, status: "Pending" },
  { customer: "Aman", amount: -100, status: "Pending" },
];

console.log("Order Processing Started...");

for (const order of orders) {
  if (order.amount <= 0) {
    order.status = "Invalid";
    console.error(`For ${order.customer} invalid order amount`);
  } else if (order.amount < 500) {
    order.status = "Low Value";
    console.warn(`For ${order.customer}: amount is below ₹500`);
  } else {
    order.status = "Success";
    console.log(`For ${order.customer} order success. Valid order`);
  }
}

console.log("Order Processing Completed!");

console.table(orders);
