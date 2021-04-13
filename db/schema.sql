DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE `department` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `salary` decimal(10,0) DEFAULT NULL,
  `department_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_department` (`department_id`),
  CONSTRAINT `fk_department` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `employee` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `role_id` int NOT NULL,
  `manager_id` int DEFAULT NULL,
  `isManager` tinyint(1) DEFAULT '0',
  `department_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_role` (`role_id`),
  KEY `fk_manager` (`manager_id`),
  KEY `department_id` (`department_id`),
  CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`),
  CONSTRAINT `fk_manager` FOREIGN KEY (`manager_id`) REFERENCES `employee` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_role` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


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

SELECT * FROM employee WHERE is_manager = TRUE;
