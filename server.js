const express = require("express");
const app = express();
var path = require("path");
const PORT = process.env.PORT || 4000;
const fs = require("fs");
const { notStrictEqual } = require("assert");
const dbFile = require("./db/db.json")
const uniqId = require('uniqid');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));


// routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "notes.html"));
});

app.get("/api/notes", (req,res) => {
  res.json(require('./db/db.json'));
});

app.post("/api/notes", (req, res) => {
  const newNote = req.body;
  const id = uniqId()
  console.log("Crating a new note.");
  const newNoteId = newNote + id;
  console.log(newNoteId);
  dbFile.push(newNoteId);
  console.log(dbFile)
});

app.listen(PORT, () => {
  console.log(`App is currently running on port ${PORT}`);
});
