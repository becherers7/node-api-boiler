const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./resources/connectMySql");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const config = require("./config/config.js");
//
require("./routes/UserRoute")(app);
connection.default();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to node api boiler" });
});

// listen on port 3000
app.listen(config.serverPort, () => {
  console.log(`Server is listening on port ${config.serverPort}`);
});
