CREATE TABLE IF NOT EXISTS employees (
  employee_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  age INT,
  aadhaar VARCHAR(20),
  bank_account VARCHAR(30),
  village VARCHAR(50),
  role VARCHAR(20)
);
