const conn = require('./connection');

const getAll = async () => {
  const [result] = await conn.execute("SELECT * FROM people");
  
  return result;
}

module.exports = { getAll };