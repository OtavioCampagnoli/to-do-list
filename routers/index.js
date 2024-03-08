const routerTask = require("./taskRoute");
module.exports = (app, express) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(routerTask);
};