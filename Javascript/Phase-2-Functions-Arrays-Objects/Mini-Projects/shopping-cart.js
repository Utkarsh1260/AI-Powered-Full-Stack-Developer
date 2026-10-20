let prompt = require("prompt-sync")();

let cart = [
  {
    id: 1,
    name: "Ice",
    price: 500,
    quantity: 1,
  },
];

let choice = 0;

while (choice !== 7) {
  console.log("\n===== SHOPPING CART MENU =====");
  console.log("Press 1 to Display cart items");
  console.log("Press 2 to Add item to cart");
  console.log("Press 3 to Empty the cart");
  console.log("Press 4 to Calculate total amount");
  console.log("Press 5 to Update quantity");
  console.log("Press 6 to Remove a specific item");
  console.log("Press 7 to Exit");

  choice = Number(prompt("Select Operation: "));

  switch (choice) {
    case 1:
      itemDisplay();
      break;

    case 2:
      addToCart();
      break;

    case 3:
      emptyCart();
      break;

    case 4:
      cartTotal();
      break;

    case 5:
      updateQuantity();
      break;

    case 6:
      removeProduct();
      break;

    case 7:
      console.log("Exiting Shopping Cart. Goodbye!");
      break;

    default:
      console.log("Invalid choice! Please select between 1 and 7.");
  }
}

//Display cart item
function itemDisplay() {
  console.log(cart);
}

// Add item to cart
function addToCart() {
  let id = Number(prompt("Enter the product id: "));
  let name = prompt("Enter the product name: ");
  let price = Number(prompt("Enter the product price: "));
  let quantity = Number(prompt("Enter the product quantity: "));

  cart.push({ id: id, name: name, price: price, quantity: quantity });
  console.log("Item added Successfully");
}

//Empty the cart
function emptyCart() {
  cart.length = 0;
  console.log(cart);
  console.log("All Items removed Successfully");
}

//Calculate Total Amount
function cartTotal() {
  let total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  console.log("Total is = " + total);
}

//Update quantity
function updateQuantity() {
  let id = Number(prompt("Enter the product Id: "));
  let quantity = Number(prompt("Enter the quantity to add: "));

  let index = cart.findIndex((item) => item.id === id);

  if (index === -1) {
    console.log("Product not found");
    return;
  }
  if (quantity <= 0) {
    console.log("Quantity must be greater than zero");
    return;
  }

  cart[index].quantity = quantity;
  console.log("Quantity updated successfully");
}

// Remove a specific item from cart
function removeProduct() {
  let id = Number(prompt("Enter the product Id: "));

  cart.pop(id);
  console.log(`${id} removed from cart successfully`);
}