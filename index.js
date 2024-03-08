const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers/index"); // Inject routers in app
const connection = require("./infrastructure/connection");
const tables = require("./infrastructure/tables");


router(app, express);
tables.init(connection);

app.listen(port, (error) => {
  if (error) {
    console.log("Error!");
    return;
  }
  console.log("Connect Success!");
});