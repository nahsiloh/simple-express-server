const express = require("express");
const router = express.Router();

const author = require("../models/Author");
const book = require("../models/Book");

router.get("/", (req, res) => {
  res.send(author.getAllAuthors());
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  res.send(author.getAuthorById(id));
});

router.get("/:id/books", (req, res) => {
  const id = Number(req.params.id);
  // res.send(author.getAuthorName(id));
  // book.filterBooks("author", author);
  res.send(book.filterBooks("author", author.getAuthorName(id)));
});

module.exports = router;
