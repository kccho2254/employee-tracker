const connection = require('./connection');
class DB {
    constructor(connection) {
        this.connection = connection;
    }

    addNewEmployee(employee) {
        return this.connection.query(`
        INSERT INTO
            employee
        SET
        ?
        `, employee)
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
            Select * from employee_db.employee where department_id = ?;
        `, id
        );
    }

    viewAllEmployees() {
        return this.connection.query(

            `select * from employee_db.employee`
        );
    }

    viewManagers() {
        return this.connection.query(
            `
            select * from employee_db.employee where isManager = true;
        `
        );
    }

}
module.exports = new DB(connection);