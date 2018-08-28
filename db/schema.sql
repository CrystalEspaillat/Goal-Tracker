### Schema
CREATE DATABASE goal_db;
USE goal_db;

CREATE TABLE goals
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	done BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
