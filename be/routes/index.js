const staff = require("./staff");
const admin = require("./admin");
const agent = require("./agent");
const call = require("./call");

function route(app) {
  app.use("/staff", staff);
  app.use("/admin", admin);
  app.use("/agent", agent);
  app.use("/call", call);
}
module.exports = route;
