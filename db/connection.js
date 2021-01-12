'use strict';
const util = require('util');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    // Your username
    user: 'root',
    // Your password
    port: 3306,
    password: 'root',
    database: 'employee_db'
});
connection.connect();
// Setting up connection.query to use promises instead of callbacks
// This allows us to use the async/await syntax
connection.query = util.promisify(connection.query);
module.exports = connection;