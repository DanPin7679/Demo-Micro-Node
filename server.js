const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

var test = [{ message: "Hello from Express" }];

app.get("/api", (req, res) => {
  res.json(test);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
