// Set up MySQL connection.
var mysql = require("mysql");
// var path = require("path");
require('dotenv').config();


var connection = mysql.createConnection({
  host: process.env.DATABASEHOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DATABASE
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
