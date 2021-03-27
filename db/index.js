const connection = require('./connection');
class DB {
    constructor(connection) {
        this.connection = connection;
    }

    viewAllRoles() {
        return this.connection.query(
            `
            SELECT role.id, role.title FROM role;
        `
        );
    }
    viewDepartments() {
        return this.connection.query(
            `
            SELECT * from department;
        `
        );
    }

    viewDepartmentById(id) {

        return this.connection.query(
            `
            Select * from employee_db.employee where department_id = ${id};
        `
        );
    }

    viewAllEmployees() {
        return this.connection.query(

            `select employee.*, department.name FROM employee_db.employee
            inner join employee_db.department
            on employee.department_id = department.id`
        );
    }

    viewManagers() {
        return this.connection.query(
            `
            select * from employee_db.employee where isManager = true;
        `
        );
    }

    addNewEmployee(employee) {
        return this.connection.query(`
        INSERT INTO employee_db.employee SET first_name = ?, last_name = ?, role_id = ?, manager_id = ?, department_id = ?
        `, employee)
    }

}
module.exports = new DB(connection);