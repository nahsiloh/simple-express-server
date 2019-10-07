const author = require("../models/Author");

describe("author", () => {
  beforeEach(() => {
    author.authors = [
      { authorid: 1, name: "Alan" },
      { authorid: 2, name: "Chris" },
      { authorid: 3, name: "Esther" }
    ];
  });

  it("should return all authors when getAllAuthors() is called ", () => {
    expect(author.getAllAuthors()).toEqual([
      { authorid: 1, name: "Alan" },
      { authorid: 2, name: "Chris" },
      { authorid: 3, name: "Esther" }
    ]);
  });

  it("should return author by authorid when getAuthorById() is called ", () => {
    expect(author.getAuthorById(1)).toEqual({ authorid: 1, name: "Alan" });
  });

  it("should return name of author by authorid when getAuthorName() is called ", () => {
    expect(author.getAuthorName(1)).toEqual("Alan");
  });
});
