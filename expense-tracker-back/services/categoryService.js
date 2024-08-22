const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { sql } = require("../configs/database");

async function createCategory({ name }) {
  const id = uuidv4();
  // await sql`insert into category (id, name) values (${id} ${name})`;
  await sql`INSERT INTO category (id, name) VALUES (${id}, ${name})`;
  return id;
}

function getCategories() {
  const list = sql`select * from category`;
  return list;
}

async function getOneCategory(id) {
  const list = await sql`select * from category where id=${id}`;
  if (list.length) {
    return list[0];
  }
  return null;
}
async function deleteOneCatetory(id) {
  await sql`delete from category where id=${id}`;
}

async function updateOnecategory(id, update) {
  await sql`update category set name = ${update.name} wheree id=${id}`;
}
module.exports = {
  createCategory,
  getCategories,
  getOneCategory,
  deleteOneCatetory,
  updateOnecategory,
};
