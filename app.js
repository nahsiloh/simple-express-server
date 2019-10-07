const express = require("express");
const app = express();

//required to use with req.body
app.use(express.json());

const index = require("./routes/index");
app.use("/", index);

const books = require("./routes/books");
app.use("/books", books);

const authors = require("./routes/authors");
app.use("/authors", authors);

module.exports = app;
