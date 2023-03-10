const express = require("express");
const app = express();

const first = (req, res, next) => {
  console.log("First");
  next();
};

const second = (req, res, next) => {
  console.log("Second");
  next();
};

const third = (req, res, next) => {
  console.log("Third");
  next();
};

app.use(first);
app.use(second);
app.use(third);

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(8000);