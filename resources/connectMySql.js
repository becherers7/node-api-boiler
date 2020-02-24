let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "node_api",
  multipleStatements: true
});

// connect to the MySQL
exports.default = () => {
  connection.connect(function(err) {
    if (err) {
      return console.error("error: " + err.message);
    } else {
      console.log("connected to mysql");
    }

    let dropTable = `drop table if exists users;`;

    let createUsersTable = `create table if not exists users(
                          id int primary key auto_increment,
                          first_name varchar(255) not null,
                          last_name varchar(255) not null,
                          career varchar(255) not null
                      );`;
    let insertUsers = `INSERT INTO users (first_name, last_name, career) VALUES
    ('Aliko', 'Dangote', 'Engineer'),
    ('Bill', 'Gates', 'Sales'),
    ('Folrunsho', 'Alakija', 'Product Owner');`;

    connection.query(dropTable + createUsersTable + insertUsers, function(
      err,
      results,
      fields
    ) {
      if (err) {
        console.log(err.message);
      }
    });

    // connection.end(function(err) {
    //   if (err) {
    //     return console.log(err.message);
    //   }
    // });
  });
};
