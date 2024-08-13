const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const port = 4000;

app.use(cors());
const content= fs.readFileSync("categories.json", "utf-8");
const categories = JSON.parse(content);

app.get("/categories/list", (req, res) =>{
  res.json(categories);
} );
app.get("/categories/create", (req, res) => {
  const {name} = req.query;
  categories.push({name: name});
  const content = {categories};
  fs.writeFileSync('categories.json', JSON.stringify(categories));

  res.json(["Success"]);
});
app.get("/categories/update", (req, res) =>{
res.json(["Success"])
});

app.get("/categories/delete", (req, res) =>{
  res.json(["Success"])
})

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

