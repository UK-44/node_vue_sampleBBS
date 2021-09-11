const express = require('express');
const app = express();
var cors = require("cors");
const mysql = require('mysql'); //mysqlの利用

connection = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'hogepass',
  database: 'vue_node_sample2_db'
});

app.use(cors());

app.get("/", function (req, res) {
  connection.query(
    'select * from thread;',
    (error, results) => {
      console.log(results);
      res.send(results);
    }
  );
});

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`server started port ${port}`));

module.exports = app