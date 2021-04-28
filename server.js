const express = require("express");
const app = express();
var path = require("path");
const PORT = process.env.PORT || 4000;
const fs = require("fs");
const { notStrictEqual } = require("assert");
const notes = {};
// const notes = "Test";
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'))

// routes
app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "./public", "index.html")
  );
});

app.get("/notes", (req, res) => {
  res.sendFile(
        
    path.join(__dirname, "./public", "notes.html")
  );
});

app.get("/api/notes", (req, res) => {
  res.json(__dirname, "./db", "db.json")
  });

app.post("/api/notes", (req, res) => {
  const newNote = req.body;
  console.log(newNote);
  notes.push(newNote);
});

app.listen(PORT, () => {
  console.log(`App is currently running on port ${PORT}`);
});
