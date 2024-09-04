const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { sql } = require("../configs/database");


async function createTransaction({amount, type, date,payee,note}) {
  const id = uuidv4();
  // await sql`insert into category (id, name) values (${id} ${name})`;
  await sql`INSERT INTO transaction (amount, type, date,payee,note) VALUES (${amount}, ${type}, ${date},${payee}, ${note})`;
  return id;
}
function createTransaction() {
  const transactionList = sql`select * from transaction`;
  return transactionList;
}
async function getOneTransaction(id) {
  const transactionList = await sql`select * from transaction where id=${id}`;
  if (transactionList.length) {
    return transactionList[0];
  }
  return null;
}
async function deleteOneTransaction (id) {
  await sql`delete from transaction where id=${id}`;
}

async function updateOneTransaction(id, update) {
  await sql`update transaction set name = ${update.amount}, type=${type}, date= ${date}, payee= ${payee},note= ${note}  where id=${id}`;
}
module.exports = {
  createTransaction,
  createTransaction,
  getOneTransaction,
  deleteOneTransaction,
  updateOneTransaction, 
};



``