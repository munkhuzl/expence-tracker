const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello !");
});

app.get("/articles", (req, res) => {
  res.json([
    { id: 1, title: "Hello,, sain uu" },
    { id: 2, title: "Hello" },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

