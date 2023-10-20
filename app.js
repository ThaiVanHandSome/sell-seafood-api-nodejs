const express = require("express");
const app = express();
const port = 3000;
const { conn, sql } = require("./DAO");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// http://localhost:3000/api/seafoods
app.get("/api/seafoods", async (req, resp) => {
  var pool = await conn;
  var sqlQuery = "SELECT * FROM Seafood";
  return await pool.request().query(sqlQuery, function (err, res) {
    resp.send({ data: res.recordset });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
