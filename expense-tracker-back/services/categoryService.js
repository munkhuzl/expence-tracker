const fs = require("fs");
const {v4: uuidv4} = require("uuid");
const {sql} = require("../configs/database");

async function createCategory({ name }) {
  const id = uuidv4();
  await sql`insert into category (id, name) values (${id} ${name})`;
  return id;
}

function getCategories() {
  const list = sql`select * from category`;
  return list;
}

// function deleteCategory(id) {
//   // const { id } = req.params;
//   const deleteIndex = categories.findIndex((cat) => cat.id === id);
//   if (deleteIndex < 0) {
//     res.sendStatus(204);
//     return;
//   }
//   categories = categories.filter((cat) => cat.id !== id);
//   fs.writeFileSync("data/categories.json", JSON.stringify(categories));
//   res.sendStatus(204);
// }
module.exports = {
  getCategories,
  createCategory,
};
