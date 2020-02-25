let mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  career: String
});

module.exports = mongoose.model("User", UserSchema);
