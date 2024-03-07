const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "otavio",
  password: "123",
  database: "to_do_list_DB",
});

module.exports = conn;