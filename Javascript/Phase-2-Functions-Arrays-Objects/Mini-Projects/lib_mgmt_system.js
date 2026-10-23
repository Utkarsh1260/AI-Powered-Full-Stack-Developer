let prompt = require("prompt-sync")();

let LMS = [{ id: 1, name: "Study", author: "Utkarsh", status: true }];
let choice1;
while (choice1 !== 3) {
  console.log("=== Who are You ===");
  console.log("Press 1 for Admin");
  console.log("Press 2 for Student");
  console.log("Press 3 to eixt");

  choice1 = Number(prompt("Enter Choice: "));
  if (choice1 === 3) {    console.log("Exiting LMS without any Interaction...");
    break;
  }
  switch (choice1) {
    case 1: {
      let adminChoice = 0;

      while (adminChoice !== 5) {
        console.log("\n==Welcome Admin Sir==");
        console.log("Press 1 to Display Books");
        console.log("Press 2 to Add new Book");
        console.log("Press 3 to Check Books Status");
        console.log("Press 4 to Remove Book");
        console.log("Press 5 to Exit");

        adminChoice = Number(prompt("Enter Operation: "));

        switch (adminChoice) {
          case 1:
            displayBook();
            break;

          case 2:
            addBook();
            break;

          case 3:
            bookStatus();
            break;

          case 4:
            removeBook();
            break;

          case 5:
            console.log("Exiting Admin Menu...");
            break;

          default:
            console.log("Please select a valid operation");
        }
      }

      break;
    }

    case 2: {
      let studentChoice = 0;

      while (studentChoice !== 5) {
        console.log("\n==Welcome Student==");
        console.log("Press 1 to Display Books");
        console.log("Press 2 to Search a Book");
        console.log("Press 3 to Issue a Book");
        console.log("Press 4 to Return a Book");
        console.log("Press 5 to Exit");

        studentChoice = Number(prompt("Enter Operation: "));

        switch (studentChoice) {
          case 1:
            displayBook();
            break;

          case 2:
            searchBook();
            break;

          case 3:
            issueBook();
            break;

          case 4:
            returnBook();
            break;

          case 5:
            console.log("Exiting Student Menu...");
            break;

          default:
            console.log("Please select a valid operation");
        }
      }

    }

    break;

    default:
      console.log("Invalid input");
  }
}

// ====== Admin function ======
// add new book
function addBook() {
    let name=prompt("Enter book name: ");
    let author=prompt("Enter author name: ");
  LMS.push({ id: LMS.length + 1, name: name, author: author, status: true });
  console.log("Book added Successfully");
}
// check books status
function bookStatus() {
  LMS.forEach((book) => {
    console.log(`${book.name}, ${book.status}`);
  });
}
// remove book
function removeBook() {
  let id = Number(prompt("Enter book id: "));

  let index = LMS.findIndex((book) => book.id === id);

  if (index === -1) {
    console.log("Book ID not found");
  } else {
    LMS.splice(index, 1);
    console.log("Book removed from LMS");
  }
}

// ====== Student function ======
// display book
function displayBook() {
  console.log(LMS);
}

// search book
function searchBook() {
  let bName = prompt("Enter book name: ");
  let bk = LMS.find((book) => {
    return book.name === bName;
  });

  if (bk === undefined) {
    console.log("Book not found");
  } else {
    console.log(bk);
  }
}

// issue book
function issueBook() {
  let bName = prompt("Enter book name: ");
  let bk = LMS.find((book) => {
    return book.name === bName;
  });

  if (bk === undefined) {
    console.log("Book not found");
  } else if (bk.status === true) {
    bk.status = false;
    console.log("Book Issued Successfully");
  } else console.log("Can not issue book, already borrowed by someone else");
}

// return book
function returnBook() {
  let bName = prompt("Enter book name: ");
  let bk = LMS.find((book) => {
    return book.name === bName;
  });

  if (bk === undefined) {
    console.log("Book not found");
  } else {
    bk.status = true;
    console.log("Book returned successfully");
  }
}

