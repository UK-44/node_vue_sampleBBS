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
    `
    WITH ThreadInfo AS (
      SELECT
      thread.thread_id as threadId,
      thread.thread_title as threadTitle,
      thread.thread_category_id1,
      thread.thread_category_id2,
      thread.thread_category_id3,
      DATE_FORMAT(thread.updated_at,'%Y-%m-%d %k:%i:%s') as updatedAt
    FROM 
      thread
    ),
    ThreadCategory AS (
      SELECT
        ThreadInfo.threadId,
        thread_category.thread_category_name 
      FROM 
        ThreadInfo
        INNER JOIN thread_category ON thread_category.thread_category_id = ThreadInfo.thread_category_id1
        OR thread_category.thread_category_id = ThreadInfo.thread_category_id2
        OR thread_category.thread_category_id = ThreadInfo.thread_category_id3
    )
    SELECT
      ThreadInfo.threadId,
      ThreadInfo.threadTitle,
      ThreadInfo.updatedAt, 
      GROUP_CONCAT(ThreadCategory.thread_category_name) as threadCategoryName
    FROM 
      ThreadInfo 
      INNER JOIN ThreadCategory ON ThreadInfo.threadId = ThreadCategory.threadId
   GROUP BY ThreadInfo.threadId;`,
    (error, results) => {
      console.log(results);
      res.send(results);
    }
  );
});

app.get("/ThreadPage", function (req, res) {
  connection.query(
    'select * from Thread;',
    (error, results) => {
      console.log(results);
      res.send(results);
    }
  );
});

app.get('/ThreadPage/:thread_id', (req, res) => {
  connection.query(
    'DELETE FROM tasks WHERE id = ?',
    [req.params.thread_id], //jsonではなくurlで受け取った値
    (error, results) => {
      connection.query(
        'SELECT * FROM tasks',
        (error, results) => {
          res.redirect('/');
        }
      );
    }
  );
});

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`server started port ${port}`));

module.exports = app