// Set up MySQL connection.
var mysql = require("mysql");
require('dotenv').config();


var connection = mysql.createConnection({
  host: process.env.JAWS_DBHOST,
  port: process.env.JAWS_PORT,
  user: process.env.JAWS_USERNAME,
  password: process.env.JAWS_PASSWORD,
  database: process.env.JAWS_DATABASE
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
