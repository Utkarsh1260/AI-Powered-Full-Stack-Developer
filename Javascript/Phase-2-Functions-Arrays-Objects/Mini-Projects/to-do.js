let prompt = require("prompt-sync")();

let todos = [];
let choice;

while (choice != 5) {
  console.log("=== Choose Operation to Perform ===");
  console.log("Press 1 to Add new Task");
  console.log("Press 2 to Add delete Task");
  console.log("Press 3 to edit Task");
  console.log("Press 4 to display Task");
  console.log("Press 5 to exit");

  console.log("\n");
  choice = Number(prompt("Enter Choice : "));

  if (choice === 1) createToDo();
  else if (choice === 2) delTask();
  else if (choice === 3) editTask();
  else if (choice === 4)
    console.log(todos); //display to-dos
  else if (choice === 5) console.log("Exiting application...");
  else console.log("Invalid Choice");

  //   console.log(todos);
}

//insert to-dos
function createToDo() {
  let title;
  let description;
  title = prompt("Enter the Title maximum 100 characters : ");
  description = prompt("Enter Description minimum 20 characters : ");

  if (title.trim().length <= 100 && description.trim().length >= 20) {
    todos.push({
      title: title,
      description: description,
      status: "pending",
    });

    console.log("Task added Successfully");
  } else console.log("Invlaid todo");
}

//delete to-dos
function delTask() {
  let title = prompt("Enter the title of Task: ");

  let index = todos.findIndex((task) => task.title === title);

  if (index != -1) {
    todos.splice(index, 1); /* array.splice(start, deleteCount); */
    console.log("Task deleted successfully");
  } else {
    console.log("Task not found");
  }
}

//Edit a to-do
function editTask() {
  let title = prompt("Enter the title of Task: ");
  let index = todos.findIndex((task) => task.title === title);

  if (index != -1) {
    let newTitle;
    let newDescription;

    newTitle = prompt("Enter the Title maximum 100 characters : ");
    newDescription = prompt("Enter Description minimum 20 characters : ");

    if (newTitle.trim().length <= 100 && newDescription.trim().length >= 20) {
      todos[index].title = newTitle;
      todos[index].description = newDescription;
      console.log("Task edited and saved successfully");
    } else console.log("Invalid input. Original task preserved.");
  } else {
    console.log("Task not found");
  }
}

// change satus - pending,in progress, completed
function changeStatus() {
  let title = prompt("Enter the title of Task: ");
  let newStatus = prompt("Enter new Status");
  let index = todos.findIndex((task) => task.title === title);

  if (index !== -1) {
    todos[index].status = newStatus;
    console.log("Status updated successfully");
  } else {
    console.log("Task not found");
  }
}
