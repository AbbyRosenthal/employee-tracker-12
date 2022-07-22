USE workplace;

INSERT INTO department(name)
VALUES ("IT");
INSERT INTO department(name)
VALUES ("Human Resources");
INSERT INTO department(name)
VALUES ("Accounting and Finance");
INSERT INTO department(name)
VALUES ("Engineering");
INSERT INTO department(name)
VALUES ("Sales");


INSERT INTO role (title, salary, department_id)
VALUES("CTO", 250000, 1);
INSERT INTO role (title, salary, department_id)
VALUES("Chief of People", 175000, 2);
INSERT INTO role (title, salary, department_id)
VALUES("CFO", 250000, 3);
INSERT INTO role (title, salary, department_id)
VALUES("Software Engineer", 145000, 4);
INSERT INTO role (title, salary, department_id)
VALUES("Recruiter", 125000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE("Zac", "Kallas", 5, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE("Brady", "Olson", 3, 3 );
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE("Cory", "Thonn", 2, 4);