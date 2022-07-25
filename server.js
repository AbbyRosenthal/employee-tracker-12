const db = require('./db/connection');
const inquirer = require('inquirer');
require('console.table');


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
                case "Update an Employee Role":
                    updateEmployeeRole();
                    break;
                default:
                    allDone();
            }
        })
}

function viewDepartments() {
    //display table showing all departments
};

function viewRoles() {
    //job title, role id, the department that role belongs to, and the salary for that role
};

function viewEmployees() {
    //formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    const sql = "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, concat(manager.first_name,' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id"
    db.query(sql, (err, res) => {
        if (err) {
            console.log(err)
        }
        console.table(res)
        askQuestions();
    })
};

function updateEmployeeRole() {
    console.log('test')
    //prompted to select an employee to update and their new role and this information is updated in the database
    const sql = "SELECT * FROM employee"
    db.query(sql, (err, res) => {
        if (err) {
            console.log(err)
        }
        const employees = res.map(({id, first_name, last_name})=>({
           value: id,
           name: `${first_name} ${last_name}`
        }))
        inquirer.prompt([{
            type: "list",
            name: "employee_id",
            message: "Which employees' role do you want to update?",
            choices: employees
        }]   
        )
        .then(result => {
            let employee_id = result.employee_id
            const sql = "SELECT * FROM role"
            db.query(sql, (err, res) => {
                if (err) {
                    console.log(err)
                }
                const roles = res.map(({ id, title }) =>({
                    value: id,
                    name: `${title}`
                }))
                updateRole(employee_id, roles)
            })
        })
    })
};

function updateRole(employee_id, roles) {
    inquirer.prompt ([{
        type: "list",
        name: "role",
        message: "What is the updated role?",
        choices: roles
    }])
    .then(result => {
        const sql = "UPDATE employee SET role_id = ? WHERE id=?"
        const params = [result.role, employee_id]
        db.query(sql, params, (err, res) => {
            if (err) {
                console.log(err)
            }
            viewEmployees();
        })
    })
}

function addDepartment() {
    //prompted to enter the name of the department and that department is added to the database
};

function addRole() {
    //prompted to enter the name, salary, and department for the role and that role is added to the database
};

function addEmployee() {
    //prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
};



function allDone() {
    console.log("Goodbye!")
    process.exit();
};


askQuestions();