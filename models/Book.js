class Book {
  constructor() {
    this.books = [
      { id: 1, title: "Pattern Language", author: "Alan" },
      { id: 2, title: "Javascript 101", author: "Chris" },
      { id: 3, title: "Coding 101", author: "Chris" },
      { id: 4, title: "How to create a react app", author: "Esther" },
      { id: 5, title: "Introduction to React", author: "Esther" },
      { id: 6, title: "Hello World", author: "Siri" },
      { id: 7, title: "Dumb thinks humans ask me", author: "Siri" },
      { id: 8, title: "Talking to humans", author: "Siri" }
    ];
  }

  getAllBooks() {
    return this.books;
  }

  getBookById(bookId) {
    return this.books.find(book => book.id === bookId);
  }

  addBook(newBook) {
    this.books.push(newBook);
  }

  filterBooks(keys, query) {
    return this.books.filter(book =>
      book[keys].toLowerCase().includes(query.toLowerCase())
    );
  }

  filterBooksByTwoKeys(key1, query1, key2, query2) {
    return this.books
      .filter(book => book[key1].toLowerCase().includes(query1.toLowerCase()))
      .filter(book => book[key2].toLowerCase().includes(query2.toLowerCase()));
  }

  updateBook(bookId, newUpdate) {
    const bookIndex = this.books.findIndex(book => bookId === book.id);
    if (bookIndex < 0) {
      throw new Error("Book does not exist");
    }
    this.books[bookIndex] = newUpdate;
  }

  deleteBook(bookId) {
    return this.books.filter(book => book.id !== bookId);
  }
}

module.exports = new Book();
