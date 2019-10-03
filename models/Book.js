class Book {
  constructor() {
    this.books = [
      { id: 1, title: "Pattern Language", author: "Alan" },
      { id: 2, title: "Javascript 101", author: "Ben" },
      { id: 3, title: "Coding 101", author: "Chris" },
      { id: 4, title: "How to create a react app", author: "David" },
      { id: 5, title: "Introduction to React", author: "Esther" }
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
    return this.books.filter(book => book[keys].includes(query));
  }

  filterBooksByTwoKeys(key1, query1, key2, query2) {
    return this.books
      .filter(book => book[key1].includes(query1))
      .filter(book => book[key2].includes(query2));
  }

  updateBook(newUpdate) {
    const checkBook = id => {
      return this.getBookById(id);
    };
    const bookIndex = this.books.findIndex(checkBook);
    this.books[bookIndex] = newUpdate;
  }

  deleteBook(bookId) {
    return this.books.filter(book => book.bookId !== bookId);
  }
}

module.exports = new Book();
