const connection = require('./connection');
class DB {
    constructor(connection) {
        this.connection = connection;
    }

    addNewEmployee(employee){
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
            
        `
        );
    }

    viewAllDepartments(){
        return this.connection.query(
            `
        SELECT 
            department.id, 
            department.name 
        FROM 
            department;
        `
        );
    }

}
module.exports = new DB(connection);