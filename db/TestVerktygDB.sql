-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema TestVerktygDB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema TestVerktygDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `TestVerktygDB` DEFAULT CHARACTER SET utf8 ;
USE `TestVerktygDB` ;

-- -----------------------------------------------------
-- Table `TestVerktygDB`.`classes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TestVerktygDB`.`classes` (
  `idClasses` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`idClasses`))
ENGINE = InnoDB;

INSERT INTO `classes` (`idClasses`,`name`) VALUES (1,'Java');
INSERT INTO `classes` (`idClasses`,`name`) VALUES (2,'Matte');
INSERT INTO `classes` (`idClasses`,`name`) VALUES (3,'Svenska');
INSERT INTO `classes` (`idClasses`,`name`) VALUES (4,'Bygg');
INSERT INTO `classes` (`idClasses`,`name`) VALUES (5,'Läkare');
INSERT INTO `classes` (`idClasses`,`name`) VALUES (6,'Transport');
INSERT INTO `classes` (`idClasses`,`name`) VALUES (7,'Staff');

-- -----------------------------------------------------
-- Table `TestVerktygDB`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TestVerktygDB`.`users` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `authorisation` INT NOT NULL,
  `classes_idClasses` INT NOT NULL,
  PRIMARY KEY (`idUser`),
  INDEX `fk_users_classes1_idx` (`classes_idClasses` ASC),
  CONSTRAINT `fk_users_classes1`
    FOREIGN KEY (`classes_idClasses`)
    REFERENCES `TestVerktygDB`.`classes` (`idClasses`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (1,'conrad@letelier.email','abc',1,1);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (2,'andreas@Vettefors.se','abc',1,1);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (3,'ramona@chantaf.se','abc',1,1);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (4,'hampus@karlsson.se','abc',1,1);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (5,'alexis@knöös.se','abc',1,1);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (6,'sven@hotmail.com','abc',1,2);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (7,'karl@hotmail.com','abc',1,2);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (8,'fredrik@hotmail.com','abc',1,2);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (9,'niklas@hotmail.com','abc',1,2);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (10,'nicolas@hotmail.com','abc',1,2);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (11,'frank@hotmail.com','abc',1,3);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (12,'driton@hotmail.com','abc',1,3);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (13,'alexander@hotmail.com','abc',1,3);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (14,'milos@hotmail.com','abc',1,4);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (15,'christian@hotmail.com','abc',1,4);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (16,'enrique@hotmail.com','abc',1,4);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (17,'frida@hotmail.com','abc',1,5);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (18,'mark@hotmail.com','abc',1,5);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (19,'olle@hotmail.com','abc',1,5);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (20,'jonathan@hotmail.com','abc',1,6);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (21,'alban@hotmail.com','abc',1,6);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (22,'simon@hotmail.com','abc',1,6);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (23,'lars@hotmail.com','abc',1,6);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (24,'anna@hotmail.com','abc',1,6);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (25,'maria@hotmail.com','abc',1,6);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (26,'berit@hotmail.com','abc',1,6);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (27,'tarek@hotmail.com','abc',1,6);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (34,'Malin@hotmail.com','abc',2,7);
INSERT INTO `users` (`idUser`,`email`,`password`,`authorisation`,`classes_idClasses`) VALUES (35,'Monique@hotmail.com','abc',3,7);


-- -----------------------------------------------------
-- Table `TestVerktygDB`.`test`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TestVerktygDB`.`test` (
  `idTest` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(99) NULL,
  PRIMARY KEY (`idTest`))
ENGINE = InnoDB;

INSERT INTO `test` (`idTest`,`name`,`description`) VALUES (1,'Java 1','Java basics, var god gör väl så jag kan få min lön');


-- -----------------------------------------------------
-- Table `TestVerktygDB`.`questions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TestVerktygDB`.`questions` (
  `idQuestion` INT NOT NULL AUTO_INCREMENT,
  `question` LONGTEXT NULL,
  `imgURL` VARCHAR(9999) NULL,
  `test_idTest` INT NOT NULL,
  PRIMARY KEY (`idQuestion`, `test_idTest`),
  INDEX `fk_Frågor_Test_idx` (`test_idTest` ASC),
  CONSTRAINT `fk_Frågor_Test`
    FOREIGN KEY (`test_idTest`)
    REFERENCES `TestVerktygDB`.`test` (`idTest`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `questions` (`idQuestion`,`question`,`imgURL`,`test_idTest`) VALUES (1,'Vad är java?','null',1);
INSERT INTO `questions` (`idQuestion`,`question`,`imgURL`,`test_idTest`) VALUES (2,'Vem skapade Java?','https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHVN4MYHAp7lscvHMyivjrXT7RlHNTfUIj0X30DsVZ8XLGDkObuw',1);
INSERT INTO `questions` (`idQuestion`,`question`,`imgURL`,`test_idTest`) VALUES (3,'Hur definierar man en siffra?','null',1);
INSERT INTO `questions` (`idQuestion`,`question`,`imgURL`,`test_idTest`) VALUES (4,'Hur definierar man en bokstav?','null',1);
INSERT INTO `questions` (`idQuestion`,`question`,`imgURL`,`test_idTest`) VALUES (5,'Vilket/vilka nyckelord används för att loopa?','null',1);
INSERT INTO `questions` (`idQuestion`,`question`,`imgURL`,`test_idTest`) VALUES (6,'Vad kallas en lista?','null',1);


-- -----------------------------------------------------
-- Table `TestVerktygDB`.`answerOptions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TestVerktygDB`.`answerOptions` (
  `idAnswerOption` INT NOT NULL AUTO_INCREMENT,
  `answer` LONGTEXT NULL,
  `isCorrect` TINYINT(1) NULL,
  `questions_idQuestion` INT NOT NULL,
  `questions_Test_idTest` INT NOT NULL,
  PRIMARY KEY (`idAnswerOption`, `questions_idQuestion`),
  INDEX `fk_answerOptions_questions1_idx` (`questions_idQuestion` ASC, `questions_Test_idTest` ASC),
  CONSTRAINT `fk_answerOptions_questions1`
    FOREIGN KEY (`questions_idQuestion` , `questions_Test_idTest`)
    REFERENCES `TestVerktygDB`.`questions` (`idQuestion` , `test_idTest`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `answeroptions` (`idAnswerOption`,`answer`,`isCorrect`,`questions_idQuestion`,`questions_Test_idTest`) VALUES (1,'En kaffesort',0,1,1);
INSERT INTO `answeroptions` (`idAnswerOption`,`answer`,`isCorrect`,`questions_idQuestion`,`questions_Test_idTest`) VALUES (2,'Ett programmeringsspråk',1,1,1);
INSERT INTO `answeroptions` (`idAnswerOption`,`answer`,`isCorrect`,`questions_idQuestion`,`questions_Test_idTest`) VALUES (3,'En penna designad av IKEA',0,1,1);
INSERT INTO `answeroptions` (`idAnswerOption`,`answer`,`isCorrect`,`questions_idQuestion`,`questions_Test_idTest`) VALUES (4,'Ryan Gosling',0,2,1);
INSERT INTO `answeroptions` (`idAnswerOption`,`answer`,`isCorrect`,`questions_idQuestion`,`questions_Test_idTest`) VALUES (5,'Eli Book',0,2,1);
INSERT INTO `answeroptions` (`idAnswerOption`,`answer`,`isCorrect`,`questions_idQuestion`,`questions_Test_idTest`) VALUES (6,'Erik Gosling',0,2,1);
INSERT INTO `answeroptions` (`idAnswerOption`,`answer`,`isCorrect`,`questions_idQuestion`,`questions_Test_idTest`) VALUES (7,'James Gosling',1,2,1);
INSERT INTO `answeroptions` (`idAnswerOption`,`answer`,`isCorrect`,`questions_idQuestion`,`questions_Test_idTest`) VALUES (8,'String',0,3,1);
INSERT INTO `answeroptions` (`idAnswerOption`,`answer`,`isCorrect`,`questions_idQuestion`,`questions_Test_idTest`) VALUES (9,'Boolean',0,3,1);
INSERT INTO `answeroptions` (`idAnswerOption`,`answer`,`isCorrect`,`questions_idQuestion`,`questions_Test_idTest`) VALUES (10,'Number',0,3,1);
INSERT INTO `answeroptions` (`idAnswerOption`,`answer`,`isCorrect`,`questions_idQuestion`,`questions_Test_idTest`) VALUES (11,'Int',1,3,1);
INSERT INTO `answeroptions` (`idAnswerOption`,`answer`,`isCorrect`,`questions_idQuestion`,`questions_Test_idTest`) VALUES (12,'String',1,4,1);
INSERT INTO `answeroptions` (`idAnswerOption`,`answer`,`isCorrect`,`questions_idQuestion`,`questions_Test_idTest`) VALUES (13,'Char',1,4,1);
INSERT INTO `answeroptions` (`idAnswerOption`,`answer`,`isCorrect`,`questions_idQuestion`,`questions_Test_idTest`) VALUES (14,'Letter',0,4,1);
INSERT INTO `answeroptions` (`idAnswerOption`,`answer`,`isCorrect`,`questions_idQuestion`,`questions_Test_idTest`) VALUES (15,'Int',0,4,1);

-- -----------------------------------------------------
-- Table `TestVerktygDB`.`studentAnswers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TestVerktygDB`.`studentAnswers` (
  `idStudentAnswers` INT NOT NULL AUTO_INCREMENT,
  `user_idUser` INT NOT NULL,
  `answerOptions_idAnswerOption` INT NOT NULL,
  `answerOptions_questions_idQuestion` INT NOT NULL,
  PRIMARY KEY (`idStudentAnswers`, `user_idUser`, `answerOptions_idAnswerOption`, `answerOptions_questions_idQuestion`),
  INDEX `fk_ElevSvar_User1_idx` (`user_idUser` ASC),
  INDEX `fk_studentAnswers_answerOptions1_idx` (`answerOptions_idAnswerOption` ASC, `answerOptions_questions_idQuestion` ASC),
  CONSTRAINT `fk_ElevSvar_User1`
    FOREIGN KEY (`user_idUser`)
    REFERENCES `TestVerktygDB`.`users` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_studentAnswers_answerOptions1`
    FOREIGN KEY (`answerOptions_idAnswerOption` , `answerOptions_questions_idQuestion`)
    REFERENCES `TestVerktygDB`.`answerOptions` (`idAnswerOption` , `questions_idQuestion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `TestVerktygDB`.`grade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TestVerktygDB`.`grade` (
  `idGrade` INT NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(9999) NULL,
  `test_idTest` INT NOT NULL,
  `user_idUser` INT NOT NULL,
  PRIMARY KEY (`idGrade`, `test_idTest`, `user_idUser`),
  INDEX `fk_Betyg_Test1_idx` (`test_idTest` ASC),
  INDEX `fk_Betyg_User1_idx` (`user_idUser` ASC),
  CONSTRAINT `fk_Betyg_Test1`
    FOREIGN KEY (`test_idTest`)
    REFERENCES `TestVerktygDB`.`test` (`idTest`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Betyg_User1`
    FOREIGN KEY (`user_idUser`)
    REFERENCES `TestVerktygDB`.`users` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `TestVerktygDB`.`test_has_users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TestVerktygDB`.`test_has_users` (
  `test_idTest` INT NOT NULL,
  `user_idUser` INT NOT NULL,
  `isDone` TINYINT(1) NULL,
  PRIMARY KEY (`test_idTest`, `user_idUser`),
  INDEX `fk_Test_has_User_User1_idx` (`user_idUser` ASC),
  INDEX `fk_Test_has_User_Test1_idx` (`test_idTest` ASC),
  CONSTRAINT `fk_Test_has_User_Test1`
    FOREIGN KEY (`test_idTest`)
    REFERENCES `TestVerktygDB`.`test` (`idTest`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Test_has_User_User1`
    FOREIGN KEY (`user_idUser`)
    REFERENCES `TestVerktygDB`.`users` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `test_has_users` (`test_idTest`,`user_idUser`,`isDone`) VALUES (1,1,0);
INSERT INTO `test_has_users` (`test_idTest`,`user_idUser`,`isDone`) VALUES (1,2,0);
INSERT INTO `test_has_users` (`test_idTest`,`user_idUser`,`isDone`) VALUES (1,3,0);
INSERT INTO `test_has_users` (`test_idTest`,`user_idUser`,`isDone`) VALUES (1,4,0);
INSERT INTO `test_has_users` (`test_idTest`,`user_idUser`,`isDone`) VALUES (1,5,1);


/*
-- Query: select * from users
LIMIT 0, 1000

-- Date: 2017-02-22 13:09
*/

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
