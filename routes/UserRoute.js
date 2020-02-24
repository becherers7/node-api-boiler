module.exports = app => {
  // const users = require("../controllers/UserController.js");
  const users = require("../controllers/sql/UserController.js");
  let baseUrl = "/users";

  app.post(baseUrl, users.create);

  app.get(baseUrl, users.findAll);

  app.get(baseUrl + "/:userId", users.findOne);

  app.put(baseUrl + "/:userId", users.update);

  app.delete(baseUrl + "/:userId", users.delete);
};
