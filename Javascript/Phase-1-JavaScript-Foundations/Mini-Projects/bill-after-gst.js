let prompt = require("prompt-sync")();

let price = Number(prompt("Enter the product price: ₹"));
let gst = Number(prompt("Enter GST percentage: "));

if (price >= 0 && gst >= 0) {
    let gstAmount = (price * gst) / 100;
    let finalBill = price + gstAmount;

    console.log("Product Price: ₹" + price.toFixed(2));
    console.log("GST Amount: ₹" + gstAmount.toFixed(2));
    console.log("Final Bill: ₹" + finalBill.toFixed(2));
} else {
    console.log("Invalid price or GST percentage.");
}