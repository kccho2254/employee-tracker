const db = require('./db');

async function(req, res){
    const {choice} = await inquirer.prompt({
        name: "choice",
        type: "rawlist",
        message: "What do you wanna do",
        choies: ["View Employee", "View Employee with Manager ID"]
    })
    console.log(choice);
    switch(choice) {
        case "View Employee":
            employeeSearch();
            break;
    }
};