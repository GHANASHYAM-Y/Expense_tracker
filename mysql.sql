CREATE DATABASE expensetracker;

USE expensetracker;

CREATE TABLE income_data (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type VARCHAR(50) NOT NULL,
  amount DECIMAL(10,2) NOT NULL
);

CREATE TABLE budget_data (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category VARCHAR(50) NOT NULL,
  amount DECIMAL(10,2) NOT NULL
);
