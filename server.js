const mysql = require('mysql2');
const inquirer = require('inquirer');
const db = require('./db');
​
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'employee_db'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    runSearch();
    connection.end();
});

async function runSearch() {
    const {choice} = await inquirer.prompt({
        name: "choice",
        type: "rawlist",
        message: "What do you wanna do",
        choices: ["View Employee", "View Employee with Manager ID"]
    })
    console.log(choice);
    switch(choice) {
        case "View Employee":
            employeeSearch();
            break;
    }
  console.log("hai")
};

