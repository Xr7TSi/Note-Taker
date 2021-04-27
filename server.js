const express = require("express");
const app = express();
var path = require("path");
const PORT = process.env.PORT || 4000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const fs = require("fs");
const { notStrictEqual } = require("assert");
const notes = {};

// routes
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../Note-Taker/Develop/public", "index.html")
  );
});

app.get("/notes", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../Note-Taker/Develop/public", "notes.html")
  );
});

app.get("/api/notes", (req, res) => {
  res.json(__dirname, "../Note-Taker/Develop/db", "db.json")
  });

app.post("/api/notes", (req, res) => {
  const newNote = req.body;
  console.log(newNote);
  notes.push(newNote);
});

app.listen(PORT, () => {
  console.log(`App is currently running on port ${PORT}`);
});
