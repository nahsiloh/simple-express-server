const express = require("express");
const router = express.Router();

const book = require("../models/Book");

router.get("/", (req, res) => {
  const { author, title } = req.query;

  if (author && title) {
    res.send(book.filterBooksByTwoKeys("author", author, "title", title));
  }
  if (author) {
    const getBookByAuthor = book.filterBooks("author", author);
    res.send(getBookByAuthor);
  }
  if (title) {
    const getBookByTitle = book.filterBooks("title", title);
    res.send(getBookByTitle);
  }
  res.send(book.getAllBooks());
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  res.send(book.getBookById(id));
});

router.put("/:id", (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const newUpdate = req.body;
    book.updateBook(id, newUpdate);
    res.send(newUpdate);
    // } catch (error) {
    //   res.status(404).send(error.message);
  } catch (err) {
    err.status = 404;
    next(err);
  }
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  res.send(book.deleteBook(id));
});

router.post("/new", (req, res) => {
  const newBook = req.body;
  book.addBook(newBook);
  res.send(newBook);
});

module.exports = router;
