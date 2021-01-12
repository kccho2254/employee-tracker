async function employeeSearch(connection, employeeName) {
    const SQL_STATEMENT = `SELECT * FROM employee_db.employee`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [employeeName]);
        console.table(rows);
    } catch (error) {
        console.log(error);
    }
}
async function roleSearch(connection, title) {
    const SQL_STATEMENT = `SELECT * FROM employee_db.role`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [title]);
        console.table(rows);
    } catch (error) {
        console.log(error);
    }
}
