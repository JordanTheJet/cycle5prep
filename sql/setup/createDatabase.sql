CREATE DATABASE `mpsClockIn`;

CREATE  TABLE `mpsClockIn`.`users` (`userID` INT(9) AUTO_INCREMENT, `email` VARCHAR(50), `first name` VARCHAR(50), `last name` VARCHAR(50), `password` VARCHAR(50), `role` VARCHAR(20), PRIMARY KEY (userID));
CREATE  TABLE `mpsClockIn`.`TimeLog` (`userID` INT(9), `logID` INT(9) AUTO_INCREMENT, `UploadDate` TIMESTAMP, `Task` VARCHAR(24), `Date` DATE, `Hours` FLOAT, PRIMARY KEY (logID) );