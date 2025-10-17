CREATE TABLE IF NOT EXISTS work (
  work_id INT PRIMARY KEY AUTO_INCREMENT,
  employee_id INT,
  site_name VARCHAR(100),
  work_date DATE,
  hours INT,
  work_type VARCHAR(50),
  photo_url TEXT,
  FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);
