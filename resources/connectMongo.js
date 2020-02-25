let mongoose = require("mongoose");
let dbConnection = require("../config/mongoConfig").connection;
let User = require("../models/UserModel");
const mockData = require("./mockData").users;

exports.default = () => {
  dbConnection();
  const connection = mongoose.connection;
  connection.once("open", function() {
    console.log("MongoDB successfully about to be created");
    showCollections("test");
  });

  let showCollections = function(db, callback) {
    connection.db.listCollections().toArray(function(err, names) {
      if (err) {
        console.error("list collections err " + err);
      } else {
        for (let i = 0; i < names.length; i++) {
          connection.db.dropCollection(names[i].name);
        }
        for (let i = 0; i < mockData.length; i++) {
          let newUser = new User(mockData[i]);
          newUser.save((err, savedUser) => {
            if (err) return console.error(err);
            console.log("initial data saved");
          });
        }
      }
    });
  };
};
