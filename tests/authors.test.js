const request = require("supertest");
const app = require("../app");
const author = require("../models/Author");
const book = require("../models/Book");

jest.mock("../models/Author");
jest.mock("../models/Book");

const mockDataAuthor = [
  { id: 1, name: "Alan" },
  { id: 2, name: "Chris" },
  { id: 3, name: "Esther" }
];

const mockDataBook = [
  { id: 1, title: "Pattern Language", author: "Alan" },
  { id: 2, title: "Javascript 101", author: "Chris" },
  { id: 3, title: "Coding 101", author: "Chris" },
  { id: 4, title: "How to create a react app", author: "Esther" },
  { id: 5, title: "Introduction to React", author: "Esther" }
];

describe("/authors", () => {
  describe("[GET]/authors", () => {
    it("returns all authors", () => {
      author.getAllAuthors.mockReturnValueOnce(mockDataAuthor);
      return request(app)
        .get("/authors")
        .expect(200)
        .expect([
          { id: 1, name: "Alan" },
          { id: 2, name: "Chris" },
          { id: 3, name: "Esther" }
        ]);
    });

    it("returns author with id 1", () => {
      author.getAuthorById.mockReturnValueOnce(mockDataAuthor[0]);
      return request(app)
        .get("/authors/1")
        .expect(200)
        .expect({ id: 1, name: "Alan" });
    });

    it("returns author with id 1 and books", () => {
      author.getAuthorName.mockReturnValueOnce(mockDataAuthor[1]);
      book.filterBooks.mockReturnValueOnce([mockDataBook[1], mockDataBook[2]]);
      return request(app)
        .get("/authors/1/books")
        .expect(200)
        .expect([
          { id: 2, title: "Javascript 101", author: "Chris" },
          { id: 3, title: "Coding 101", author: "Chris" }
        ]);
    });
  });
});
