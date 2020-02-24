let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "node_api"
});

exports.create = (req, res) => {
  let user = req.body;
  if (!user) {
    return res.status(400).send({
      error: true,
      message: "User content can not be empty"
    });
  }
  connection.query("INSERT INTO users SET ? ", user, function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    return res.status(200).send({
      error: false,
      data: results,
      message: "New user has been created successfully."
    });
  });
};

exports.findAll = (req, res) => {
  connection.query("SELECT * FROM users", function(error, results, fields) {
    if (error) {
      return res.status(500).send({
        message: err.message || "Something wrong while retrieving Users."
      });
    }
    return res
      .status(200)
      .send({ error: false, data: results, message: "users list." });
  });
};

exports.findOne = (req, res) => {
  let user_id = req.params.id;
  if (!user_id) {
    return res.status(400).send({
      error: true,
      message: "User not found with id " + user_id
    });
  }
  connection.query("SELECT * FROM users where id=?", user_id, function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    return res.send({
      error: false,
      data: results[0],
      message: "Selected user."
    });
  });
};

exports.update = (req, res) => {
  let user_id = req.params;
  let user = req.body;
  if (!user_id || !user) {
    return res
      .status(400)
      .send({ error: user, message: "Please provide user and user_id" });
  }
  connection.query(
    "UPDATE users SET user = ? WHERE id = ?",
    [user, user_id],
    function(error, results, fields) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results,
        message: "user has been updated successfully."
      });
    }
  );
};

exports.delete = (req, res) => {
  let user_id = req.params;
  if (!user_id) {
    return res
      .status(400)
      .send({ error: true, message: "Please provide user_id" });
  }
  connection.query("DELETE FROM users WHERE id=?", [user_id], function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    return res.send({
      error: false,
      data: results,
      message: "User deleted successfully."
    });
  });
};
