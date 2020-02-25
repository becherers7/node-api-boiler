const url = "mongoUrl here";
var mongoose = require("mongoose");

exports.connection = () => {
  mongoose.Promise = global.Promise;
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Successfully connected to the database");
      // mongoose.connection();
      require("../models/UserModel");
    })
    .catch(err => {
      console.log("Could not connect to the database. Exiting now...", err);
      process.exit();
    });
  mongoose.connection.on("error", err =>
    debug("MongoDB connection error: ${err}")
  );
};
