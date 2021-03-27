// async function startMenu() {
//     try{ 
//         const answers = await inquirer.prompt([
//         {
//             type: "list",
//             message: "Pick a choice from the following",
//             name: "res",
//             choices: [
//                 "Add Departments",
//                 "Add Roles",
//                 "Add Employees", 
//                 "View All Departments",
//                 "View All Roles", 
//                 "View All Employees",
//                 "Update Employee Roles", 
//                 "Delete a Department",
//                 "Quit"
//             ]
//         }
//     ]);
//     }  catch(err){
//         console.log(err);
//     }
// }
//     // switch(answers.res){



// // async function employeeSearch(connection, employeeName) {
// //     const SQL_STATEMENT = `SELECT * FROM employee_db.employee`;

// //     try {
// //         const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [employeeName]);
// //         console.table(rows);
// //     } catch (error) {
// //         console.log(error);
// //     }
// // }
// // async function roleSearch(connection, title) {
// //     const SQL_STATEMENT = `SELECT * FROM employee_db.role`;

// //     try {
// //         const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [title]);
// //         console.table(rows);
// //     } catch (error) {
// //         console.log(error);
// //     }
// // }

