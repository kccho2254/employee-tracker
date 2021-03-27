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


// async function viewEmployees() {
//     const departments = await db.viewAllEmployees();
//     console.table(departments);
//     runSearch();
// }
// async function viewRoles() {
//     const roles = await db.viewAllRoles();
//     console.table(roles);
//     runSearch();
// }
// async function Managers() {
//     const managers = await db.viewManagers();
//     console.table(managers);
//     runSearch();
// }

// async function viewEmployeeByDepartment() {

//     let showDepts = await db.viewDepartments();
//     console.table(showDepts);
//     const department = await inquirer.prompt([
//         {
//             name: "dept",
//             type: "list",
//             message: "Which department of employees do you want to see?",
//             choices: showDepts.map(dept => {
//                 return {
//                     name: dept.name,
//                     value: dept.id
//                 }
//             })
//         }

//     ]);
//     console.log([department.id]);
//     const dpt = await db.viewDepartmentById([department.id]);
//     console.table(dpt);
// }

// async function addAnEmployee(){
//     const employee = await inquirer.prompt([
              
//         {
//             name: "first_name",
//             type: "input",
//             message: "What's their First Name?",
//         }, 
//         {
//             name: "last_name",
//             type: "input",
//             message: "What's their Last Name?",
//           }, 
//         {
//             name: "role",
//             type: "list",
//             message: "Which position does the employee have?",
//             choices: roles.map(role => {
//                 return {
//                     name: role.title,
//                     value: role.id
//                 }
//             } )

//         },
//         {
//             name: "manager",
//             type: "list",
//             message: "Who is this employee's manager?",
//             choices: emps.map(manager => {
//                 return {
//                     name: manager.first_name + manager.last_name,
//                     value: manager.id
//                 }
//             } )

//         }    

//       ]);

//     await db.addNewEmployee([empAnswers.first_name, empAnswers.last_name, empAnswers.role, empAnswers.manager]);
//     runSearch();
// }
// addAnEmployee();
// viewDepartments();
