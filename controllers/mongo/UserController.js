const User = require("../../models/UserModel.js");

exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "User content can not be empty"
    });
  }

  let newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    career: req.body.career
  });

  newUser
    .save()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Something wrong while creating the User."
      });
    });
};

exports.findAll = (req, res) => {
  User.find()
    .then(Users => {
      res.status(200).send(Users);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Something wrong while retrieving Users."
      });
    });
};

exports.findOne = (req, res) => {
  User.findById({ _id: req.params.id })
    .then(User => {
      if (!User) {
        return res.status(404).send({
          message: "User not found with id " + req.params.id
        });
      }
      res.status(200).send(User);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Something wrong retrieving User with id " + req.params.UserId
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "User content can not be empty"
    });
  }

  User.findByIdAndUpdate(
    req.params.id,
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
          message: "User not found with id " + req.params.id
        });
      }
      res.status(200).send(User);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Something wrong updating note with id " + req.params.id
      });
    });
};

exports.delete = (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(User => {
      if (!User) {
        return res.status(404).send({
          message: "User not found with id " + req.params.id
        });
      }
      res.send({ message: "User deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "User not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Could not delete User with id " + req.params.id
      });
    });
};
