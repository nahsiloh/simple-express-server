class Author {
  constructor() {
    this.authors = [
      { authorid: 1, name: "Alan" },
      { authorid: 2, name: "Chris" },
      { authorid: 3, name: "Esther" },
      { authorid: 4, name: "Siri" }
    ];
  }

  getAllAuthors() {
    return this.authors;
  }

  getAuthorById(authorid) {
    return this.authors.find(author => author.authorid === authorid);
  }

  getAuthorName(authorid) {
    const getAuthor = this.getAuthorById(authorid);
    return getAuthor.name;
  }
}

module.exports = new Author();
