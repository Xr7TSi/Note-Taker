const express = require("express");
const app = express();
var path = require('path');
const PORT = process.env.PORT || 4000;
const fs = require('fs');




// routes
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '../Note-Taker/Develop/public','notes.html'));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../Note-Taker/Develop/public','index.html'));
});


// C:\Users\jrein\gt-bootcamp\homework\Note-Taker\Develop\public\index.html

app.listen(PORT, () => {
  console.log(`App is currently running on port ${PORT}`);
});
