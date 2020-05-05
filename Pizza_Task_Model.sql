
-- tables
-- Table: Addresses
CREATE TABLE Addresses (
    idAddress int NOT NULL AUTO_INCREMENT,
    street varchar(20) NOT NULL,
    apartment varchar(10) NULL,
    idUser int NOT NULL,
    CONSTRAINT Addresses_pk PRIMARY KEY (idAddress,idUser)
);

-- Table: Categories
CREATE TABLE Categories (
    idCategory int NOT NULL AUTO_INCREMENT,
    name varchar(20) NOT NULL,
    CONSTRAINT Categories_pk PRIMARY KEY (idCategory)
);

-- Table: Orders
CREATE TABLE Orders (
    idOrder int NOT NULL AUTO_INCREMENT,
    totalAmount double(7,2) NOT NULL,
    idAddress int NOT NULL,
    idUser int NOT NULL,
    note varchar(100) NOT NULL,
    dateOrder date NOT NULL,
    CONSTRAINT Orders_pk PRIMARY KEY (idOrder)
);

-- Table: ProductInCart
CREATE TABLE ProductInCart (
    idProduct int NOT NULL,
    quantity int NOT NULL,
    idUser int NOT NULL,
    CONSTRAINT ProductInCart_pk PRIMARY KEY (idProduct,idUser)
);

-- Table: ProductInOrder
CREATE TABLE ProductInOrder (
    idProduct int NOT NULL,
    idOrder int NOT NULL,
    quantity int NOT NULL,
    CONSTRAINT ProductInOrder_pk PRIMARY KEY (idProduct,idOrder)
);

-- Table: Products
CREATE TABLE Products (
    idProduct int NOT NULL AUTO_INCREMENT,
    name varchar(30) NOT NULL,
    priceEur double(7,2) NOT NULL,
    priceDol double(7,2) NOT NULL,
    ingredients varchar(100) NULL,
    idCategory int NOT NULL,
    CONSTRAINT Products_pk PRIMARY KEY (idProduct)
);

-- Table: Users
CREATE TABLE Users (
    idUser int NOT NULL AUTO_INCREMENT,
    email varchar(20) NOT NULL,
    phoneNumber varchar(20) NOT NULL,
    CONSTRAINT Users_pk PRIMARY KEY (idUser)
);

-- foreign keys
-- Reference: Addresses_Users (table: Addresses)
ALTER TABLE Addresses ADD CONSTRAINT Addresses_Users FOREIGN KEY Addresses_Users (idUser)
    REFERENCES Users (idUser);

-- Reference: Orders_Addresses (table: Orders)
ALTER TABLE Orders ADD CONSTRAINT Orders_Addresses FOREIGN KEY Orders_Addresses (idAddress,idUser)
    REFERENCES Addresses (idAddress,idUser);

-- Reference: PizzaInCart_Users (table: ProductInCart)
ALTER TABLE ProductInCart ADD CONSTRAINT PizzaInCart_Users FOREIGN KEY PizzaInCart_Users (idUser)
    REFERENCES Users (idUser);

-- Reference: PizzasInCart_Pizzas (table: ProductInCart)
ALTER TABLE ProductInCart ADD CONSTRAINT PizzasInCart_Pizzas FOREIGN KEY PizzasInCart_Pizzas (idProduct)
    REFERENCES Products (idProduct);

-- Reference: ProductInOrder_Orders (table: ProductInOrder)
ALTER TABLE ProductInOrder ADD CONSTRAINT ProductInOrder_Orders FOREIGN KEY ProductInOrder_Orders (idOrder)
    REFERENCES Orders (idOrder);

-- Reference: ProductInOrder_Pizzas (table: ProductInOrder)
ALTER TABLE ProductInOrder ADD CONSTRAINT ProductInOrder_Pizzas FOREIGN KEY ProductInOrder_Pizzas (idProduct)
    REFERENCES Products (idProduct);

-- Reference: Products_ProductCategories (table: Products)
ALTER TABLE Products ADD CONSTRAINT Products_ProductCategories FOREIGN KEY Products_ProductCategories (idCategory)
    REFERENCES Categories (idCategory);

--Mock Data
insert into users (email, phoneNumber) values ('fakeuser@gmail.com', '1234123');
insert into addresses (street, apartment, idUser) values ('Fantasy Street 123', '', 1);

insert into categories (name) values ('Food');

insert into products (name, priceEur, priceDol, ingredients, idCategory) values 
('La Margherita', '15.0', '16.0', 'Ingredients',1),
('La Sfincione', '14.0', '15.0', 'Ingredients',1),
('La fugazza', '16.0', '17.0', 'Ingredients',1),
('La fugazza with cheese', '15.0', '16.0', 'Ingredients',1),
('La fugazzeta', '15.0', '16.0', 'Ingredients',1),
('Chicago Pizza', '10.0', '11.0', 'Ingredients',1),
('New York Pizza', '12.0', '13.0', 'Ingredients',1),
('La Flammkuchen', '15.0', '16.0', 'Ingredients',1),
('Mexican Pizza', '14.0', '15.0', 'Ingredients',1);

-- End of file.

