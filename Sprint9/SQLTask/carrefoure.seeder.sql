-- Select SUPERMARKET Database
USE SUPERMARKET;
-- INSERT User
INSERT INTO User (Username, Password)
VALUES ('Andrew_1', 'secret'),
  ('Essam_2', '123124'),

-- INSERT Customer
INSERT INTO Customer (UserId, FirstName, LastName, Type)
VALUES (1, 'Andrew', 'Essam', 'Mounir',onlineCustomer)
  
-- INSERT Employee
INSERT INTO Employee (UserId, FirstName, LastName, Major)
VALUES (3, 'Mohameed', 'Mohammed')

-- INSERT stores
INSERT INTO stores (Name)
VALUES ('Rehab'),
  ('Madinty');
-- INSERT products
INSERT INTO products (Name, storesID)
VALUES ('Water', 1),
 
 
-- INSERT StoreProduct
INSERT INTO StoreProduct (productId, storeId)
VALUES (1, 1)
