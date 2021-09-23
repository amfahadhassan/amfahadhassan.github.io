var mysql = require('mysql');
var connection = mysql.createPool({
  connectionLimit:10,
  host: 'localhost',
  user: 'root',
  password: 'Root111!',
  database: 'entries'
});
exports.connection = connection;