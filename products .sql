DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price decimal(10,4) NULL,
  stock_quantity INT null,
  PRIMARY KEY (id)
);
INSERT INTO products (product_name, department_name, price, stock_quantity)
values ("JavaScript DVD", "Education",19.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
values ("MySQL DVD", "Education",14.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
values ("LightBulbs", "Home Goods",4.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
values ("My Favorite Songs", "Music",22.99, 41);

INSERT INTO products (product_name, department_name, price, stock_quantity)
values ("Get Rich or Die Trying", "Education",44.99, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
values ("JavaScript DVD", "Education",19.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
values ("Men's Polos", "Clothing",44.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
values ("jQuery Information", "Education",11.99, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
values ("Cold Beer", "Food and Beverage",12.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
values ("SamSung TV", "Electronics",99.99, 50);


