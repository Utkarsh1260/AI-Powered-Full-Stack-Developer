let prompt = require("prompt-sync")();

let expense = [];

function displayExpense() {
  console.log(expense);
}

function addExpense() {
  let id = expense.length + 1;
  let title = prompt("Enter Expense name: ");
  let amount = Number(prompt("Enter the Amount: "));
  let category = prompt("Enter the category: "); //food,travel,grocery,education,enjoy,healthcare,houseBills,clothes
  let date = prompt("Enter date(DD/MM/YYYY): ");

  expense.push({ id, title, amount, category, date });
}
function searchExpense() {
  let cat = prompt("Enter the category: ");
  let ex = expense.filter((e) => e.category === cat);
  console.log(ex);
}

function totalExpense() {
  let total = expense.reduce((acc, e) => acc + e.amount, 0);
  console.log(total);
}

//monthly expense
function MonthlyExpense() {
  let month = prompt("Enter the month and year (MM/YYYY): ");
  let monthly = expense.filter((e) => {
    let parts = e.date.split("/");
    return `${parts[1]}/${parts[2]}` === month;
  });

  let total = monthly.reduce((acc, e) => acc + e.amount, 0);

  console.log("Monthly Expenses:", total);
}

//day expense
function dayExpense() {
  let date = prompt("Enter date (DD/MM/YYYY): ");

  let daily = expense.filter((e) => {
    return e.date === date;
  });

  let total = daily.reduce((acc, e) => acc + e.amount, 0);

  console.log("Daily Expenses:", total);
}
function highestExpense() {
  if (expense.length === 0) {
    console.log("No expenses found!");
    return;
  }
  let max = expense[0].amount;
  expense.forEach((e) => {
    if (e.amount > max) {
      max = e.amount;
    }
  });

  console.log("max: ", max);
}
function lowestExpense() {
  if (expense.length === 0) {
    console.log("No expenses found!");
    return;
  }
  let min = expense[0].amount;
  expense.forEach((e) => {
    if (e.amount < min) {
      min = e.amount;
    }
  });

  console.log("min ", min);
}

let choice;

while (choice !== 0) {
  console.log(`
    ===== EXPENSE TRACKER =====

    1. Add Expense
    2. Display All Expenses
    3. Search Expense by Category
    4. Calculate Total Expenses
    5. Calculate Monthly Expenses
    6. Calculate Daily Expenses
    7. Find Highest Expense
    8. Find Lowest Expense
    0. Exit

    ===========================
  `);

  choice = Number(prompt("Select an operation: "));

  switch (choice) {
    case 1:
      addExpense();
      break;

    case 2:
      displayExpense();
      break;

    case 3:
      searchExpense();
      break;

    case 4:
      totalExpense();
      break;

    case 5:
      MonthlyExpense();
      break;

    case 6:
      dayExpense();
      break;

    case 7:
      highestExpense();
      break;

    case 8:
      lowestExpense();
      break;

    case 0:
      console.log("Exiting Expense Tracker. Goodbye!");
      break;

    default:
      console.log("Invalid choice! Please try again.");
  }
}
