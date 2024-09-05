const { sql } = require("./configs/database");
const { app } = require("./configs/basic");
const {
  getCategories,
  createCategory,
  getOneCategory,
  deleteOneCatetory,
  updateOnecategory,
} = require("./services/categoryService");
const { getOneTransaction, deleteOneTransaction, updateOneTransaction } = require("./services/transactionService");

app.get("/categories", async (req, res) => {
  const list = await getCategories();
  res.json(list);
});

app.get("/categories/:id", async (req, res) => {
  const { id } = req.params;
  const one = await getOneCategory(id);
  if (!one) {
    res.status(404).json({ message: "Not found" });
    return;
  }
  res.json(one);
});

app.post("/categories", async (req, res) => {
  const input = req.body;
  const id = await createCategory(input);
  res.status(201).json({ id });
});

app.delete("/categories/:id",
  async (req, res) => {
    const { id } = req.params;
    const one = await deleteOneCatetory(id);
    res.sendStatus(204)
  });

app.put("/categories/:id", async (req, res) => {
  const { id } = req.params;
  const name = req.body;
  const icon = req.body;
  const color = req.body;
  await updateOnecategory(id, {name, icon, color});
  res.sendStatus(204);
});



//traansaction/
app.get("/transaction", async (req, res) => {
  const list = await getTransaction();
  res.json(list);
});

app.get("/transaction/:id", async (req, res) => {
  const { id } = req.params;
  const one = await getOneTransaction(id);
  if (!one) {
    res.status(404).json({ message: "Not found" });
    return;
  }
  res.json(one);
});

app.post("/transaction", async (req, res) => {
  const input = req.body;
  const id = await createTransaction(input);
  res.status(201).json({ id });
});

app.delete("/transaction/:id", async (req, res) => {
  const { id } = req.params;
  const one = await deleteOneTransaction(id);
  res.sendStatus(204);
});

app.put("/transaction/:id", async (req, res) => {
  const { id } = req.params;
  const name = req.body;
  const icon = req.body;
  const color = req.body;
  await updateOneTransaction(id, { name, icon, color });
  res.sendStatus(204);
});
