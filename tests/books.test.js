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
});
