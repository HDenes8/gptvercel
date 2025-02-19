--3. Database Setup - SQL Schema (database/schema.sql)
CREATE TABLE cars (
  id SERIAL PRIMARY KEY,
  brand VARCHAR(50) NOT NULL,
  model VARCHAR(50) NOT NULL,
  year INT NOT NULL
);

INSERT INTO cars (brand, model, year) VALUES ('Toyota', 'Camry', 2021);
INSERT INTO cars (brand, model, year) VALUES ('Honda', 'Civic', 2022);
INSERT INTO cars (brand, model, year) VALUES ('Ford', 'Mustang', 2023);
