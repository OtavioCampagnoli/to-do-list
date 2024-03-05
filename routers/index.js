const routerTask = require("./taskRoute");
module.exports = (app) => {
  app.use(routerTask);
};