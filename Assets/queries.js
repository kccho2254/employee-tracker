const db = require('../db');
const inquirer = require('inquirer');

async function viewEmployees() {
    try {
        const rows = await db.viewAllEmployees();
        console.table(rows);
    } catch (error) {
        console.log(error);
    }
}

async function viewRoles() {
    try {
        const roles = await db.viewAllRoles();
        console.table(roles);
    } catch (error) {
        console.log(error);
    }
}

async function Managers() {
    try {
        const managers = await db.viewManagers();
        console.table(managers);
    } catch (error) {
        console.log(error);
    }
}

async function viewEmployeeByDepartment() {

    try {
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
        console.log(department.dept);
        const dpt = await db.viewDepartmentById(department.dept);
        console.table(dpt);
    } catch (error) {
        console.log(error);
    }
}

async function addAnEmployee() {

    let role = await db.viewAllRoles();
    let department = await db.viewDepartments();
    let emps = await db.viewManagers();

    const employee = await inquirer.prompt([
      
        {
            name: "first_name",
            type: "input",
            message: "What's their first name?",
        },
        {
            name: "last_name",
            type: "input",
            message: "What's their last name?",
        },
        {
            name: "department_id",
            type:"list",
            message:"Which department are they a part of?",
            choices: department.map(department => {
                return {
                    name: department.name,
                    value: department.id
                }
            })
        },
        {
            name: "role",
            type: "list",
            message: "Which position does the employee hold?",
            choices: role.map(role => {
                return {
                    name: role.title,
                    value: role.id
                }
            })
        },
        {
            name: "manager",
            type: "list",
            message: "Who is this employee's manager?",
            choices: emps.map(manager => {
                return {
                    name: manager.first_name + manager.last_name,
                    value: manager.id
                }
            })

        }
    ]);
    console.log(employee);
    await db.addNewEmployee([employee.first_name, employee.last_name, employee.role, employee.department, employee.manager]);
}

module.exports = {
    viewEmployees,
    viewRoles,
    Managers,
    viewEmployeeByDepartment,
    addAnEmployee
}