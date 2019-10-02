const express = require("express");
const router = express.Router();

const book = require("../models/Book");

router.get("/", (req, res) => {
  const { author, title } = req.query;
  if (author) {
    res.send(book.filterBooks("author", author));
  }
  if (title) {
    res.send(book.filterBooks("title", title));
  }
  res.send(book.getAllBooks());
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  res.send(book.getBookById(id));
});

router.post("/new", (req, res) => {
  const newBook = req.body;
  book.addBook(newBook);
  res.send(newBook);
});

module.exports = router;
