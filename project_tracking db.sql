CREATE DATABASE project_tracking;
use project_tracking;

CREATE TABLE user(
	Id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (50) NOT NULL,
    mobileNo INT,
    email VARCHAR(50) NOT NULL
);

CREATE TABLE clientDetails(
	Id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (50) NOT NULL,
    address VARCHAR (50) NOT NULL,
    contactPersonName VARCHAR(50) NOT NULL,
	mobileNo INT,
	email VARCHAR(50) NOT NULL
);

CREATE TABLE project (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    projectName VARCHAR(50) NOT NULL,
    clientId INT,
    techStack TEXT,
    startDate TIMESTAMP,
    endDate TIMESTAMP,
    progress INT,
    FOREIGN KEY (clientId) REFERENCES ClientDetails(id) 
);

CREATE TABLE projectResourceMapping(
	Id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    projectId INT,
    FOREIGN KEY (userId) REFERENCES User(id),
    FOREIGN KEY (projectId) REFERENCES Project(id)
);

CREATE TABLE projectDocument (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    projectId INT,
    documentName VARCHAR(50),
    documentUrl VARCHAR(255),
    FOREIGN KEY (projectId) REFERENCES Project(Id)
);

CREATE TABLE task(
	 Id INT AUTO_INCREMENT PRIMARY KEY,
     userId INT,
     projectId INT,
     taskDate TIMESTAMP,
     taskName VARCHAR(50),	
     description VARCHAR (255),
     FOREIGN KEY (userId) REFERENCES User (Id),
     FOREIGN KEY (projectId) REFERENCES Project (Id)
);