const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'root',
    database: 'employee_db'
});

connection.query = util.promisify(connection.query);
module.exports = connection;