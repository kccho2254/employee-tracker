DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE employee (
	first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    role_id int NOT NULL,
    manager_id int,
    FOREIGN KEY(role_id) REFERENCES role(title),
    FOREIGN KEY(manager_id) REFERENCES role(department_id)
    );
    
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jerry", "Sanchez", 23817, NULL);

CREATE TABLE role (
    id  INT PRIMARY KEY,
    title  VARCHAR(30),
    salary  DECIMAL,
    department_id INT,
    FOREIGN KEY(department_id) REFERENCES department(name)
);

CREATE TABLE department (
    id int NOT NULL,
    name varchar(30)
);

SELECT * FROM employee;
select * from department;
select * from role;