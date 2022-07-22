
const express = require('express');
const db = require('./db/connection');
const inquirer = require('inquirer');
const { allowedNodeEnvironmentFlags } = require('process');

const PORT = process.env.PORT || 3306;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//starts the express server on 3002
// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});


function askQuestions() {
    inquirer.prompt({
        type: "list",
        name: "start",
        message: "Which would you like to do?",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update an Employee Role",
            "I'm All Done! Goodbye"
        ]
    })
        .then(data => {
            switch (data.start) {
                case "View All Departments":
                    viewDepartments();
                    break;
                case "View All Roles":
                    viewRoles();
                    break;
                case "View All Employees":
                    viewEmployees();
                    break;
                case "Add a Department":
                    addDepartment();
                    break;
                case "Add a Role":
                    addRole();
                    break;
                case "Add an Employee":
                    addEmployee();
                    break;
                case "Update Employee Role":
                    updateEmployee();
                    break;
                case "I'm All Done! Goodbye":
                    allDone();
                    break;
            }
        })
}

askQuestions();