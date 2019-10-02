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

  filterBooks(key, query) {
    return this.books.filter(book => book[key].includes(query));
  }
}

module.exports = new Book();
