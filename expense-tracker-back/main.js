// const __dirname = dirname(fileURLToPath(import.meta.url));
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const port = 4000;
const { v4: uuidv4 } = require("uuid");
app.use(express.json());
app.use(cors());
const content = fs.readFileSync("categories.json", "utf-8");
let categories = JSON.parse(content);

async function createNewCategory(form) {
  const id = uuidv4();
  form.id = id;
  categories.push(form);
  fs.writeFileSync("categories.json", JSON.stringify(categories));
  return id;
}

function getCategories(){
  const id = uuidv4();


}

function getOneCategory(id){
  const id = createNewCategory();
}







//categories CRUD
app.get("/categories", (req, res) => {
  res.json(categories);
});

app.get("/categories/:id", (req, res) => {
  const { id } = req.params;
  const category = categories.find(cat.id === id);
  res.json(category);
});

app.post("/categories", async (req, res) => {
  const { name } = req.body;
  const id = await createNewCategory({ name });
  res.status(201).json({ id });
});

app.put("/categories/: id ", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ message: "`Name field is empty`" });
    return;
  }
  const index = categories.findIndex((cat) => cat.id === id);
  categories[index].name = name;
  fs.writeFileSync("categories.json", JSON.stringify(categories));
  res.json(["Success"]);
});

app.delete("/categories/:id", (req, res) => {
  const { id } = req.params;
  const deleteIndex = categories.findIndex((cat) => cat.id === id);

  if (deleteIndex < 0) {
    res.sendStatus(204);
    return;
  }
  categories = categories.filter((cat) => cat.id !== id);
  fs.writeFileSync("categories.json", JSON.stringify(categories));
  res.sendStatus(204);
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

// function passwordCheck(req, res, next) {
//   const password = req.body["password"];
//   if (password === "ILoveProgramming") {
//     userIsAuthorised = true;
//   }
//   next();
// }
// app.use(passwordCheck);

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/expense-front/page.js");
// });

// app.post("/check", (req, res) => {
//   if (userIsAuthorised) {
//     res.sendFile(__dirname + "/expense-front/page.js");
//   } else {
//     res.sendFile(__dirname + "/expense-front/index.html");
//     //Alternatively res.redirect("/");
//   }
// });
