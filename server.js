const mysql = require('mysql');
const inquirer = require('inquirer');
const db = require('./db');
const [VIEW_EMPLOYEES, VIEW_MANAGERS, VIEW_ROLES, VIEW_EMPLOYEES_BY_DEPARTMENT, ADD_EMPLOYEE, REMOVE_EMPLOYEE, UPDATE_EMPLOYEE_MANAGER, UPDATE_EMPLOYEE_ROLE] = require('./Assets/const');
const { roleSearch, employeeSearch } = require('./Assets/queries');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'employee_DB'
});

connection.connect(async (err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId + "\n");
    runSearch();
    connection.end();
});

async function runSearch() {

    const choice = await inquirer.prompt({
        name: "choice",
        type: "rawlist",
        message: "What do you want to do?",
        choices: [VIEW_EMPLOYEES, VIEW_MANAGERS, VIEW_ROLES, VIEW_EMPLOYEES_BY_DEPARTMENT, ADD_EMPLOYEE, REMOVE_EMPLOYEE, UPDATE_EMPLOYEE_MANAGER, UPDATE_EMPLOYEE_ROLE, "Exit"]
    });
    switch (choice.choice) {
        case VIEW_EMPLOYEES:
            viewEmployees();
            break;
        case VIEW_ROLES:
            viewRoles();
            break;
        case VIEW_MANAGERS:
            Managers();
            break;
        case VIEW_EMPLOYEES_BY_DEPARTMENT:
            viewEmployeeByDepartment();
            break;
    }
};


async function viewEmployees() {
    const departments = await db.viewAllEmployees();
    console.table(departments);
    runSearch();
}
async function viewRoles() {
    const roles = await db.viewAllRoles();
    console.table(roles);
    runSearch();
}
async function Managers() {
    const managers = await db.viewManagers();
    console.table(managers);
    runSearch();
}

async function viewEmployeeByDepartment() {

    let showDepts = await db.viewDepartments();
    console.table(showDepts);
    const department = await inquirer.prompt([
        {
            name: "dept",
            type: "list",
            message: "Which department of employees do you want to see?",
            choices: showDepts.map(dept => {
                return {
                    name: dept.name,
                    value: dept.id
                }
            })
        }

    ]);
    // const dpt = await db.viewDepartmentById(id);
    const dpt = connection.query(
        `
        Select * from employee_db.employee where department_id = ?;
    `
    );
    console.table(dpt);
    runSearch();
}

// async function addAnEmployee(){
//     const employee = {
//         first_name:'Kevin',
//         last_name: 'Cho',
//         role_id: 1,
//         manager_id: null
//     }

//     await db.addNewEmployee(employee);
//     viewDepartments();
// }
// addAnEmployee();
// viewDepartments();
