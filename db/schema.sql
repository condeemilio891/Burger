
CREATE DATABASE IF NOT EXISTS BURGER_DB;

USE BURGER_DB;
DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers( 
id int NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(30) NOT NULL,
devoured boolean DEFAULT FALSE,
PRIMARY KEY (id)
); 

SELECT * FROM burgers;


