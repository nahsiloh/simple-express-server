const express = require("express");
const app = express();

//required to use with req.body
app.use(express.json());

const index = require("./routes/index");
app.use("/", index);

const books = require("./routes/books");
app.use("/books", books);

module.exports = app;
