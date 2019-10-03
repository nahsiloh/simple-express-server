const book = require("../models/Book");

describe("book", () => {
  beforeEach(() => {
    book.books = [
      { id: 1, title: "Pattern Language", author: "Alan" },
      { id: 2, title: "Javascript 101", author: "Alan" }
    ];
  });

  it("should return a list of books when getAllBooks() is called", () => {
    expect(book.getAllBooks()).toEqual([
      { id: 1, title: "Pattern Language", author: "Alan" },
      { id: 2, title: "Javascript 101", author: "Alan" }
    ]);
  });

  it("should return a book with the matching id when getBookById() is called", () => {
    expect(book.getBookById(1)).toEqual({
      id: 1,
      title: "Pattern Language",
      author: "Alan"
    });
  });

  it("should add a new book to the book list when addBook() is called", () => {
    book.addBook({
      id: 3,
      title: "Coding 101",
      author: "Chris"
    });
    const lengthOfBookArray = book.books.length;
    expect(lengthOfBookArray).toEqual(3);
  });

  it("should return a list of books with the same author when filterBooks() is called", () => {
    expect(book.filterBooks("author", "Alan")).toEqual([
      { id: 1, title: "Pattern Language", author: "Alan" },
      { id: 2, title: "Javascript 101", author: "Alan" }
    ]);
  });

  it("should return a list of books with the same title when filterBooks() is called", () => {
    expect(book.filterBooks("title", "Language")).toEqual([
      { id: 1, title: "Pattern Language", author: "Alan" }
    ]);
  });

  it("should return a list of books with the same title and author when filterBooksByTwoKeys() is called", () => {
    expect(
      book.filterBooksByTwoKeys("author", "Alan", "title", "Language")
    ).toEqual([{ id: 1, title: "Pattern Language", author: "Alan" }]);
  });

  it("should update the book with id 1 when updateBook() is called", () => {
    book.updateBook(1, {
      id: 5,
      title: "Introduction to React",
      author: "Esther"
    });
  });

  it("should delete the book with id 1 when deleteBook() is called", () => {
    book.deleteBook(1);
    expect(book.books).toEqual(
      expect.not.objectContaining({
        id: 1,
        title: "Pattern Language",
        author: "Alan"
      })
    );
  });
});
