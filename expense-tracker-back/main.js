const { sql } = require("./configs/database");
const { app } = require("./configs/basic");

const { getCategories, createCategory } = require("./services/categoryService");

app.get("/categories", async (req, res) => {
  const list = await getCategories();
  res.json(list);
});
app.post("/categories", async (req, res) => {
  const input = req.body;
  const id = await createCategory(input);
  res.status(201).json({ id });
});

app.get("/articles", (req, res) => {
  res.json([
    { id: 1, title: "Hello,, sain uu" },
    { id: 2, title: "Hello" },
  ]);
});
