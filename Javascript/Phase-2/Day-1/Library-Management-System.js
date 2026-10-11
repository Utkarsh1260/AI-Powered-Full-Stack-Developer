/*
===========================================================
10 — LIBRARY MANAGEMENT SYSTEM
===========================================================

This combines almost everything from Phase 2:

- Objects
- Arrays
- Functions
- Methods
- `this`
- find()
- filter()
- Early return
- Array of objects
*/


const library = {


    // =====================================================
    // BOOKS ARRAY
    // =====================================================

    books: [],


    // =====================================================
    // ADD BOOK
    // =====================================================

    addBook(title, author) {

        this.books.push({

            id: this.books.length + 1,

            title: title,

            author: author,

            borrowed: false

        });

    },


    // =====================================================
    // BORROW BOOK
    // =====================================================

    borrowBook(id) {

        const book = this.books.find(
            book => book.id === id
        );


        // Early return

        if (!book) {

            return "Book not found";

        }


        if (book.borrowed) {

            return "Already borrowed";

        }


        book.borrowed = true;


        return `You borrowed "${book.title}"`;

    },


    // =====================================================
    // RETURN BOOK
    // =====================================================

    returnBook(id) {

        const book = this.books.find(
            book => book.id === id
        );


        if (!book) {

            return "Book not found";

        }


        book.borrowed = false;


        return `You returned "${book.title}"`;

    },


    // =====================================================
    // AVAILABLE BOOKS
    // =====================================================

    availableBooks() {

        return this.books.filter(
            book => !book.borrowed
        );

    }

};


// =========================================================
// ADD BOOKS
// =========================================================

library.addBook(
    "Atomic Habits",
    "James Clear"
);

library.addBook(
    "Deep Work",
    "Cal Newport"
);

library.addBook(
    "The Richest Man in Babylon",
    "George S. Clason"
);


// =========================================================
// BORROW
// =========================================================

console.log(
    library.borrowBook(1)
);


// =========================================================
// TRY BORROWING AGAIN
// =========================================================

console.log(
    library.borrowBook(1)
);


// =========================================================
// AVAILABLE BOOKS
// =========================================================

console.log(
    library.availableBooks()
);


// =========================================================
// RETURN BOOK
// =========================================================

console.log(
    library.returnBook(1)
);


// =========================================================
// AVAILABLE AGAIN
// =========================================================

console.log(
    library.availableBooks()
);


