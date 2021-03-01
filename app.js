const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.listen(3000, () => {
  console.log("Server started at 3000...");
})
