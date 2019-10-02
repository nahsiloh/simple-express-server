const request = require("supertest");
const app = require("../app");
const book = require("../models/Book");

describe("/books", () => {
  it("[GET]/books returns all books", () => {
    return request(app)
      .get("/books")
      .expect(200)
      .expect(book.getAllBooks());
  });

  it("[GET] /books/1 returns book object", () => {
    return request(app)
      .get("/books/1")
      .expect(200)
      .expect({ id: 1, title: "Pattern Language", author: "Alan" });
  });

  it("[POST]/ books returns correct message", () => {
    const newBook = { id: 6, title: "Talking to strangers", author: "Faith" };
    return request(app)
      .post("/books/new")
      .send(newBook)
      .expect(200)
      .expect({ id: 6, title: "Talking to strangers", author: "Faith" });
  });

  it("[GET]/books?author=David", () => {
    return request(app)
      .get("/books")
      .query({ author: "David" })
      .expect(200)
      .expect([{ id: 4, title: "How to create a react app", author: "David" }]);
  });

  it("[GET]/books?author=Author that does not exist", () => {
    return request(app)
      .get("/books")
      .query({ author: "Author that does not exist" })
      .expect(200)
      .expect([]);
  });

  it("[GET]/books?title=language", () => {
    return request(app)
      .get("/books")
      .query({ title: "Language" })
      .expect(200)
      .expect([{ id: 1, title: "Pattern Language", author: "Alan" }]);
  });
});
