// import bodyParser from "body-parser";
// const __dirname = dirname(fileURLToPath(import.meta.url));
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { dirname } = require("path");
const { fileURLToPath } = require("url");
const app = express();
var bodyParser = require("body-parser");
const port = 4000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
const content = fs.readFileSync("categories.json", "utf-8");
const categories = JSON.parse(content);

app.get("/categories/list", (req, res) => {
  res.json(categories);
});

app.post("/categories/create", (req, res) => {
  const { name } = req.body;
  categories.push({
    id: new Date().toISOString(),
    name: name,
  });

  fs.writeFileSync("data.json", JSON.stringify(content));
  res.json(["Success"]);
});

app.put("/categories/update", (req, res) => {
  const { id: name } = req.query;
  const index = categories.findIndex((cat) => cat.id === id);
  categories[index].name = name;
  fs.writeFileSync("data.json", JSON.stringify(categories));
  res.json(["Success"]);
});

app.get("/categories/delete", (req, res) => {
  const { id } = req.query;
  categories = categories.filter((cat) => cachedDataVersionTag.id !== id);
  fs.writeFileSync("data.json", JSON.stringify(content));
  res.json(["Success"]);
});

app.get("/", (req, res) => {
  res.send("Hello World");
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
