const mysql = require('mysql');
const inquirer = require('inquirer');
const [VIEW_EMPLOYEES, VIEW_MANAGERS, VIEW_ROLES, VIEW_EMPLOYEES_BY_DEPARTMENT, ADD_EMPLOYEE, REMOVE_EMPLOYEE, UPDATE_EMPLOYEE_MANAGER, UPDATE_EMPLOYEE_ROLE] = require('./Assets/const');

// requiring queries
const  {
    viewEmployees,
    viewRoles,
    Managers,
    viewEmployeeByDepartment,
    addAnEmployee
    } = require('./Assets/queries');

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
            await viewEmployees();
            await runSearch();
            break;
        case VIEW_ROLES:
            await viewRoles();
            await runSearch();
            break;
        case VIEW_MANAGERS:
            await Managers();
            await runSearch();
            break;
        case VIEW_EMPLOYEES_BY_DEPARTMENT:
            await viewEmployeeByDepartment();
            await runSearch();
            break;
        case ADD_EMPLOYEE:
            await addAnEmployee(connection);
            await runSearch();
            break;
    }
};
