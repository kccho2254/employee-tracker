// const mysql = require('mysql');
// const inquirer = require('inquirer');
// const [VIEW_EMPLOYEES, VIEW_MANAGERS, VIEW_ROLES, VIEW_EMPLOYEES_BY_DEPARTMENT, ADD_EMPLOYEE, REMOVE_EMPLOYEE, UPDATE_EMPLOYEE_MANAGER, UPDATE_EMPLOYEE_ROLE] = require('./db/const');
// const  {roleSearch, employeeSearch} = require('./db/queries');

// ​console.log('test');
// console.log('test');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'root',
//     database: 'employee_DB'
// });

// connection.connect(async (err) => {
//     if (err) throw err;
//     console.log('connected as id ' + connection.threadId + "\n");
//     runSearch();
//     connection.end();
// });

// async function runSearch() {

//     const choice = await inquirer.prompt({
//         name: "choice",
//         type: "rawlist",
//         message: "What do you wanna do",
//         choices: [VIEW_EMPLOYEES, VIEW_MANAGERS, VIEW_ROLES, VIEW_EMPLOYEES_BY_DEPARTMENT, ADD_EMPLOYEE, REMOVE_EMPLOYEE, UPDATE_EMPLOYEE_MANAGER, UPDATE_EMPLOYEE_ROLE, "Exit"]
//     });
//     switch (choice) {
//         case VIEW_EMPLOYEES:
//             console.log('aaaaa');
//             employeeSearch(connection);
//             break;
//         case VIEW_ROLES:
//             role = await roleSearch();
//             roleSearch(connection, title);
//             break;
//     }
// };


const inquirer = require('inquirer');
const db = require('./db');

async function viewDepartments(){
    const departments = await db.viewAllDepartments();

    console.table(departments);
}

async function addAnEmployee(){
    const employee = {
        first_name:'Kevin',
        last_name: 'Cho',
        role_id: 1,
        manager_id: null
    }

    await db.addNewEmployee(employee);
    viewDepartments();
}
addAnEmployee();
viewDepartments();
