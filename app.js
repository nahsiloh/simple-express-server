const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Thank you for visiting the server"));
app.get("/books", (req, res) => res.send("Here are the books"));
app.post("/books", (req, res) => res.send("You have created a new book"));

module.exports = app;
