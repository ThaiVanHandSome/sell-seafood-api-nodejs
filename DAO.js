const sql = require("mssql/msnodesqlv8");
config = {
  user: "sa",
  password: "Vanbs1234qq!",
  server: "DESKTOP-THCGVRC",
  database: "SEAFOOD",
  driver: "msnodesqlv8",
};

const conn = new sql.ConnectionPool(config).connect().then((pool) => pool);

module.exports = {
  conn: conn,
  sql: sql,
};
