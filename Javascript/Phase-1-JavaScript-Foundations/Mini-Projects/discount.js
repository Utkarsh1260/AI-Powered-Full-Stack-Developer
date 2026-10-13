let prompt = require("prompt-sync")();

let price = Number(prompt("Enter the original price: ₹"));
let discount = Number(prompt("Enter the discount percentage: "));

if (price >= 0 && discount >= 0 && discount <= 100) {
    let discountAmount = (price * discount) / 100;
    let finalPrice = price - discountAmount;

    console.log("Original Price: ₹" + price.toFixed(2));
    console.log("Discount Amount: ₹" + discountAmount.toFixed(2));
    console.log("Final Price: ₹" + finalPrice.toFixed(2));
} else {
    console.log("Invalid price or discount percentage.");
}