exports.create = (req, res) => {
  let user = req.body.user;
  if (!user) {
    return res.status(400).send({
      error: true,
      message: "User content can not be empty"
    });
  }
  dbConn.query("INSERT INTO users SET ? ", { user: user }, function(
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
  dbConn.query("SELECT * FROM users", function(error, results, fields) {
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
  dbConn.query("SELECT * FROM users where id=?", user_id, function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    return res.send({
      error: false,
      data: results[0],
      message: "users list."
    });
  });
};

exports.update = (req, res) => {
  let user_id = req.body.user_id;
  let user = req.body.user;
  if (!user_id || !user) {
    return res
      .status(400)
      .send({ error: user, message: "Please provide user and user_id" });
  }
  dbConn.query(
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
  let user_id = req.body.user_id;
  if (!user_id) {
    return res
      .status(400)
      .send({ error: true, message: "Please provide user_id" });
  }
  dbConn.query("DELETE FROM users WHERE id = ?", [user_id], function(
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
