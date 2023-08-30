-- Dropping the database if exist 

DROP DATABASE IF EXISTS SUPERMARKET;
-- creating our database command
CREATE DATABASE SUPERMARKET;
-- using our database
USE SUPERMARKET;
-- creating table users
CREATE TABLE User (
  Id INT AUTO_INCREMENT,
  Username VARCHAR(100) NOT NULL UNIQUE,
  Password VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);
-- creating table Customer
CREATE TABLE Customer (
  Id INT AUTO_INCREMENT,
  FirstName VARCHAR(50) NOT NULL,
  LastName VARCHAR(50),
  Type VARCHAR(100) NOT NULL,
  UserId INT NOT NULL,
  PRIMARY KEY (id)
);

-- creating table Employee
CREATE TABLE Employee (
  Id INT AUTO_INCREMENT,
  FirstName VARCHAR(50) NOT NULL,
  LastName VARCHAR(50),
  UserId INT,
  PRIMARY KEY (id)
);

-- creating table Stores
CREATE TABLE Stores (
  Id INT AUTO_INCREMENT,
  StoreName VARCHAR(100) NOT NULL UNIQUE,
  PRIMARY KEY (id)
);


-- creating table Products

CREATE TABLE Products (
  Id INT AUTO_INCREMENT,
  ProductName VARCHAR(100) NOT NULL UNIQUE,
  StoresId INT NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE storeproduct (
 storerId INT,
  productId INT,
  PRIMARY KEY (storerId, productId) -- Composite Primary Key
);



--
ALTER TABLE customer
ADD FOREIGN KEY (UserId)
REFERENCES User(Id)
ON DELETE CASCADE;
--

--
ALTER TABLE employee
ADD FOREIGN KEY (UserId)
REFERENCES Users(Id)
ON DELETE CASCADE;
--

--
ALTER TABLE product
ADD FOREIGN KEY (storeId)
REFERENCES stores(Id)
ON DELETE CASCADE;
--

--
ALTER TABLE storeproduct
ADD FOREIGN KEY (storeID)
REFERENCES stores(Id)
ON DELETE CASCADE;

ALTER TABLE storeproduct
ADD FOREIGN KEY (prodcutId)
REFERENCES product(Id)
ON DELETE CASCADE;

