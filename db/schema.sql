DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id int PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT NOT NULL,
    FOREIGN KEY(department_id) REFERENCES department(id)
);

CREATE TABLE employee (
	id int PRIMARY KEY AUTO_INCREMENT,
	first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    role_id int NOT NULL,
    manager_id int NOT NULL,
    FOREIGN KEY(role_id) REFERENCES role(id),
    FOREIGN KEY(manager_id) REFERENCES role(id)
    );

SELECT * FROM employee;
SELECT * FROM department;
SELECT * FROM role;

INSERT INTO department (name)
VALUES ("Sales"), 
("Legal"),
("Human Resources"),
("Development"),
("Customer Service");

INSERT INTO role (title, salary, department_id)
SELECT 'Sales Lead', 40000, id 
FROM department
WHERE id = 1
LIMIT 1;

INSERT INTO role (title, salary, department_id)
SELECT 'Salesperson', 30000, id 
FROM department
WHERE id = 1
LIMIT 1;

INSERT INTO role (title, salary, department_id)
SELECT 'Software Engineer', 35000, id 
FROM department
WHERE id = 4
LIMIT 1;

INSERT INTO role (title, salary, department_id)
SELECT 'I/O Psychologist', 60000, id 
FROM department
WHERE id = 3
LIMIT 1;

INSERT INTO role (title, salary, department_id)
SELECT 'Account Manager', 100000, id 
FROM department
WHERE id = 4
LIMIT 1;

INSERT INTO role (title, salary, department_id)
SELECT 'Secretary', 22000, id 
FROM department
WHERE id = 5
LIMIT 1;

INSERT INTO role (title, salary, department_id)
SELECT 'Legal Team Lead', 115000, id 
FROM department
WHERE id = 3
LIMIT 1;

INSERT INTO role (title, salary, department_id)
SELECT 'Lawyer', 82000, id 
FROM department
WHERE id = 3
LIMIT 1;

INSERT INTO role (title, salary, department_id)
SELECT 'Lead Engineer', 70000, id 
FROM department
WHERE id = 4
LIMIT 1;