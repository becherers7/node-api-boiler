DROP TABLE IF EXISTS users;
--   CREATE TABLE IF NOT EXISTS users
CREATE TABLE users (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  first_name VARCHAR(250) NOT NULL,
  last_name VARCHAR(250) NOT NULL,
  career VARCHAR(250) DEFAULT NULL
);
