const User = require("../models/UserModel.js");

//Create new User
exports.create = (req, res) => {
  // Request validation
  if (!req.body) {
    return res.status(400).send({
      message: "User content can not be empty"
    });
  }

  // Create a User
  const User = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    career: req.body.career
  });

  User.save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Something wrong while creating the User."
      });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  User.find()
    .then(Users => {
      res.send(Users);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Something wrong while retrieving Users."
      });
    });
};

// Find a single User with a UserId
exports.findOne = (req, res) => {
  User.findById(req.params.UserId)
    .then(User => {
      if (!User) {
        return res.status(404).send({
          message: "User not found with id " + req.params.UserId
        });
      }
      res.send(User);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with id " + req.params.UserId
        });
      }
      return res.status(500).send({
        message: "Something wrong retrieving User with id " + req.params.UserId
      });
    });
};

// Update a User
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    return res.status(400).send({
      message: "User content can not be empty"
    });
  }

  // Find and update User with the request body
  User.findByIdAndUpdate(
    req.params.userId,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      career: req.body.career
    },
    { new: true }
  )
    .then(User => {
      if (!User) {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId
        });
      }
      res.send(User);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId
        });
      }
      return res.status(500).send({
        message: "Something wrong updating note with id " + req.params.userId
      });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
  User.findByIdAndRemove(req.params.userId)
    .then(User => {
      if (!User) {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId
        });
      }
      res.send({ message: "User deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId
        });
      }
      return res.status(500).send({
        message: "Could not delete User with id " + req.params.userId
      });
    });
};
