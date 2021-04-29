const express = require("express");
const app = express();
var path = require("path");
const PORT = process.env.PORT || 4000;
const fs = require("fs");
const dbFile = require("./db/db.json");
const uniqId = require("uniqid");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

// home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

//notes page route
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "notes.html"));
});

//route to get database
app.get("/api/notes", (req, res) => {
  res.json(require("./db/db.json"));
});

//route for database posting
app.post("/api/notes", (req, res) => {
  const newNote = req.body;
  const id = uniqId();
  console.log("Crating a new note.");
  newNote.id = id;
  dbFile.push(newNote);
  console.log(dbFile);
  fs.writeFile("./db/db.json", JSON.stringify(dbFile), (err) =>
    // res.redirect("/notes") was added to fix bug requiring refresh after note input to display note on left.
    err ? console.error(err) : res.redirect("/notes")
  );
});

app.delete("/api/notes/:id", (req, res) => {
  let jsonFilePath = path.join(__dirname, "/db/db.json");

  for (let i = 0; i < dbFile.length; i++) {
    if (dbFile[i].id == req.params.id) {
      dbFile.splice(i, 1);
    }
  }

  fs.writeFileSync(jsonFilePath, JSON.stringify(dbFile), (err) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("Note deleted.");
    }
  });
  res.json(dbFile);
});

app.listen(PORT, () => {
  console.log(`App is currently running on port ${PORT}`);
});
