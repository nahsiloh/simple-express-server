const request = require("supertest");
const app = require("../app");
const book = require("../models/Book");

jest.mock("../models/Book");

const mockData = [
  { id: 1, title: "Pattern Language", author: "Alan" },
  { id: 2, title: "Javascript 101", author: "Ben" },
  { id: 3, title: "Coding 101", author: "Chris" }
];

describe("/books", () => {
  describe("[GET]/books", () => {
    it("returns all books", () => {
      book.getAllBooks.mockReturnValueOnce(mockData);
      return request(app)
        .get("/books")
        .expect(200)
        .expect([
          { id: 1, title: "Pattern Language", author: "Alan" },
          { id: 2, title: "Javascript 101", author: "Ben" },
          { id: 3, title: "Coding 101", author: "Chris" }
        ]);
    });

    it("/1 returns book object with id 1", () => {
      book.getBookById.mockReturnValueOnce(mockData[0]);
      return request(app)
        .get("/books/1")
        .expect(200)
        .expect({ id: 1, title: "Pattern Language", author: "Alan" });
    });

    it("/2 returns book object with id 1", () => {
      book.getBookById.mockReturnValueOnce(mockData[1]);
      return request(app)
        .get("/books/2")
        .expect(200)
        .expect({ id: 2, title: "Javascript 101", author: "Ben" });
    });
    it("?author=David", () => {
      book.filterBooks.mockReturnValueOnce([mockData[1]]);
      return request(app)
        .get("/books")
        .query({ author: "Ben" })
        .expect(200)
        .expect([{ id: 2, title: "Javascript 101", author: "Ben" }]);
    });

    it("?author=Author that does not exist", () => {
      book.filterBooks.mockReturnValueOnce([]);
      return request(app)
        .get("/books")
        .query({ author: "Author that does not exist" })
        .expect(200)
        .expect([]);
    });

    it("?title=language", () => {
      book.filterBooks.mockReturnValueOnce([mockData[0]]);
      return request(app)
        .get("/books")
        .query({ title: "Language" })
        .expect(200)
        .expect([{ id: 1, title: "Pattern Language", author: "Alan" }]);
    });

    it("?title=language & author=Alan", () => {
      book.filterBooksByTwoKeys.mockReturnValueOnce([mockData[0]]);
      return request(app)
        .get("/books")
        .query({ author: "Alan", title: "Language" })
        .expect(200)
        .expect([{ id: 1, title: "Pattern Language", author: "Alan" }]);
    });
  });

  describe("[POST]/books", () => {
    it("should check that addBook() has been called", () => {
      const newBook = {
        id: 6,
        title: "Talking to strangers",
        author: "Faith"
      };
      return request(app)
        .post("/books/new")
        .send(newBook)
        .expect(200)
        .expect({ id: 6, title: "Talking to strangers", author: "Faith" })
        .expect(() => {
          expect(book.addBook).toHaveBeenCalledTimes(1);
        });
    });
  });

  describe("[PUT]/books", () => {
    it("should check that update() has been called", () => {
      const newUpdate = {
        id: 6,
        title: "Talking to strangers",
        author: "Faith"
      };
      return request(app)
        .put("/books/1")
        .send(newUpdate)
        .expect(200)
        .expect({ id: 6, title: "Talking to strangers", author: "Faith" });
    });
  });

  describe("[DELETE]/books", () => {
    it("should check that update() has been called", () => {
      return request(app)
        .delete("/books/1")
        .expect(200);
    });
  });
});
