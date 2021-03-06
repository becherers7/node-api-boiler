module.exports = app => {
  const users = require("../controllers/mongo/UserController.js");
  // const users = require("../controllers/sql/UserController.js");
  let baseUrl = "/users";

  app.post(baseUrl, users.create);

  app.get(baseUrl, users.findAll);

  app.get(baseUrl + "/:id", users.findOne);

  app.put(baseUrl + "/:id", users.update);

  app.delete(baseUrl + "/:id", users.delete);
};
