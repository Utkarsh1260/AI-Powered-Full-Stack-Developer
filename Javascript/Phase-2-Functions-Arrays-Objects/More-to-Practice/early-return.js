// Before flattening: Nested conditions
function issueBook(book) {
  if (book !== undefined) {
    if (book.status === true) {
      book.status = false;
      console.log("Book issued successfully");
    } else {
      console.log("Book is already issued");
    }
  } else {
    console.log("Book not found");
  }
}



// After flattening: Early returns
function issueBook(book) {
  if (book === undefined) {
    console.log("Book not found");
    return;
  }

  if (book.status === false) {
    console.log("Book is already issued");
    return;
  }

  book.status = false;
  console.log("Book issued successfully");
}
