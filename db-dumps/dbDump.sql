-- --------------------------------------------------------
-- Värd:                         127.0.0.1
-- Server version:               5.7.16-log - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for tabell testverktygdb.answeroptions
CREATE TABLE IF NOT EXISTS `answeroptions` (
  `idAnswerOption` int(11) NOT NULL AUTO_INCREMENT,
  `answer` longtext,
  `isCorrect` tinyint(1) DEFAULT NULL,
  `questions_idQuestion` int(11) NOT NULL,
  `questions_Test_idTest` int(11) NOT NULL,
  PRIMARY KEY (`idAnswerOption`,`questions_idQuestion`),
  KEY `fk_answerOptions_questions1_idx` (`questions_idQuestion`,`questions_Test_idTest`),
  CONSTRAINT `fk_answerOptions_questions1` FOREIGN KEY (`questions_idQuestion`, `questions_Test_idTest`) REFERENCES `questions` (`idQuestion`, `test_idTest`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8;

-- Dumpar data för tabell testverktygdb.answeroptions: ~41 rows (approximately)
/*!40000 ALTER TABLE `answeroptions` DISABLE KEYS */;
INSERT INTO `answeroptions` (`idAnswerOption`, `answer`, `isCorrect`, `questions_idQuestion`, `questions_Test_idTest`) VALUES
	(1, 'En kaffesort', 0, 1, 1),
	(2, 'Ett programmeringsspråk', 1, 1, 1),
	(3, 'En penna designad av IKEA', 0, 1, 1),
	(4, 'Ryan Gosling', 0, 2, 1),
	(5, 'Eli Book', 0, 2, 1),
	(6, 'Erik Gosling', 0, 2, 1),
	(7, 'James Gosling', 1, 2, 1),
	(8, 'String', 0, 3, 1),
	(9, 'Boolean', 0, 3, 1),
	(10, 'Number', 0, 3, 1),
	(11, 'Int', 1, 3, 1),
	(12, 'String', 0, 4, 1),
	(13, 'Char', 1, 4, 1),
	(14, 'Letter', 0, 4, 1),
	(15, 'Int', 0, 4, 1),
	(16, 'For loop', 1, 5, 1),
	(17, 'För loop', 0, 5, 1),
	(18, 'Får loop', 0, 5, 1),
	(19, 'Bakelse', 0, 6, 1),
	(20, 'System', 0, 6, 1),
	(21, 'Array', 1, 6, 1),
	(22, 'Finland', 0, 7, 2),
	(23, 'Italien', 0, 7, 2),
	(24, 'Danmark', 1, 7, 2),
	(25, 'Kroatien', 0, 8, 2),
	(26, 'Portugal', 1, 8, 2),
	(27, 'Bulgarien', 0, 8, 2),
	(28, 'Sverige', 0, 9, 2),
	(29, 'Tjeckien', 0, 9, 2),
	(30, 'Belgien', 1, 9, 2),
	(31, 'Vitryssland', 1, 10, 2),
	(32, 'Moldavien', 0, 10, 2),
	(33, 'Frankrike', 0, 10, 2),
	(42, 'Venus', 0, 12, 3),
	(43, 'Merkurius', 1, 12, 3),
	(44, 'Jupiter', 0, 12, 3),
	(45, 'Uranus', 0, 12, 3),
	(46, 'Inte så varm', 0, 13, 3),
	(47, 'Jättevarm', 1, 13, 3),
	(48, 'Superkall', 0, 13, 3),
	(49, 'Ljummen', 0, 13, 3);
/*!40000 ALTER TABLE `answeroptions` ENABLE KEYS */;

-- Dumping structure for tabell testverktygdb.classes
CREATE TABLE IF NOT EXISTS `classes` (
  `idClasses` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idClasses`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- Dumpar data för tabell testverktygdb.classes: ~7 rows (approximately)
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` (`idClasses`, `name`) VALUES
	(1, 'SYSMJ2'),
	(2, 'M34'),
	(3, 'SKL45'),
	(4, 'Bygg'),
	(5, 'Läkare'),
	(6, 'Transport'),
	(7, 'Staff');
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;

-- Dumping structure for tabell testverktygdb.grade
CREATE TABLE IF NOT EXISTS `grade` (
  `idGrade` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(9999) DEFAULT NULL,
  `test_idTest` int(11) NOT NULL,
  `user_idUser` int(11) NOT NULL,
  PRIMARY KEY (`idGrade`,`test_idTest`,`user_idUser`),
  KEY `fk_Betyg_Test1_idx` (`test_idTest`),
  KEY `fk_Betyg_User1_idx` (`user_idUser`),
  CONSTRAINT `fk_Betyg_Test1` FOREIGN KEY (`test_idTest`) REFERENCES `test` (`idTest`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Betyg_User1` FOREIGN KEY (`user_idUser`) REFERENCES `users` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- Dumpar data för tabell testverktygdb.grade: ~0 rows (approximately)
/*!40000 ALTER TABLE `grade` DISABLE KEYS */;
/*!40000 ALTER TABLE `grade` ENABLE KEYS */;

-- Dumping structure for tabell testverktygdb.questions
CREATE TABLE IF NOT EXISTS `questions` (
  `idQuestion` int(11) NOT NULL AUTO_INCREMENT,
  `question` longtext,
  `imgURL` varchar(9999) DEFAULT NULL,
  `test_idTest` int(11) NOT NULL,
  PRIMARY KEY (`idQuestion`,`test_idTest`),
  KEY `fk_Frågor_Test_idx` (`test_idTest`),
  CONSTRAINT `fk_Frågor_Test` FOREIGN KEY (`test_idTest`) REFERENCES `test` (`idTest`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- Dumpar data för tabell testverktygdb.questions: ~12 rows (approximately)
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` (`idQuestion`, `question`, `imgURL`, `test_idTest`) VALUES
	(1, 'Vad är java?', '', 1),
	(2, 'Vem skapade Java?', '', 1),
	(3, 'Hur definierar man en siffra?', '', 1),
	(4, 'Hur definierar man en bokstav?', '', 1),
	(5, 'Vilket/vilka nyckelord används för att loopa?', '', 1),
	(6, 'Vad kallas en lista?', '', 1),
	(7, 'Vilken flagga?', 'http://www.varldensflaggor.se/bilder/flaggor/danmarks-flagga.png', 2),
	(8, 'Vilken flagga?', 'http://www.varldensflaggor.se/bilder/flaggor/portugals-flagga.png', 2),
	(9, 'Vilken flagga?', 'http://www.varldensflaggor.se/bilder/flaggor/belgiens-flagga.png', 2),
	(10, 'Vilken flagga?', 'http://www.varldensflaggor.se/bilder/flaggor/vitrysslands-flagga.png', 2),
	(12, 'Vilken planet är närmast solen', '', 3),
	(13, 'Hur varm är solen?', '', 3);
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;

-- Dumping structure for tabell testverktygdb.studentanswers
CREATE TABLE IF NOT EXISTS `studentanswers` (
  `idStudentAnswers` int(11) NOT NULL AUTO_INCREMENT,
  `user_idUser` int(11) NOT NULL,
  `answerOptions_idAnswerOption` int(11) NOT NULL,
  `answerOptions_questions_idQuestion` int(11) NOT NULL,
  PRIMARY KEY (`idStudentAnswers`,`user_idUser`,`answerOptions_idAnswerOption`,`answerOptions_questions_idQuestion`),
  KEY `fk_ElevSvar_User1_idx` (`user_idUser`),
  KEY `fk_studentAnswers_answerOptions1_idx` (`answerOptions_idAnswerOption`,`answerOptions_questions_idQuestion`),
  CONSTRAINT `fk_ElevSvar_User1` FOREIGN KEY (`user_idUser`) REFERENCES `users` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_studentAnswers_answerOptions1` FOREIGN KEY (`answerOptions_idAnswerOption`, `answerOptions_questions_idQuestion`) REFERENCES `answeroptions` (`idAnswerOption`, `questions_idQuestion`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

-- Dumpar data för tabell testverktygdb.studentanswers: ~0 rows (approximately)
/*!40000 ALTER TABLE `studentanswers` DISABLE KEYS */;
/*!40000 ALTER TABLE `studentanswers` ENABLE KEYS */;

-- Dumping structure for tabell testverktygdb.test
CREATE TABLE IF NOT EXISTS `test` (
  `idTest` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(99) DEFAULT NULL,
  `timeLimit` int(10) DEFAULT NULL,
  PRIMARY KEY (`idTest`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Dumpar data för tabell testverktygdb.test: ~3 rows (approximately)
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` (`idTest`, `name`, `description`, `timeLimit`) VALUES
	(1, 'Java 1', 'Java basics, var god gör väl så jag kan få min lön', 180),
	(2, 'Europas flaggor', 'Kan du alla dessa flaggor?', 120),
	(3, 'Solsystemet', 'Solsystemet, detta fantastisk ämne', 5);
/*!40000 ALTER TABLE `test` ENABLE KEYS */;

-- Dumping structure for view testverktygdb.testresults
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `testresults` (
	`user_idUser` INT(11) NOT NULL,
	`test_idTest` INT(11) NOT NULL,
	`question` LONGTEXT NULL COLLATE 'utf8_general_ci',
	`answer` LONGTEXT NULL COLLATE 'utf8_general_ci',
	`isCorrect` TINYINT(1) NULL
) ENGINE=MyISAM;

-- Dumping structure for tabell testverktygdb.test_has_users
CREATE TABLE IF NOT EXISTS `test_has_users` (
  `test_idTest` int(11) NOT NULL,
  `user_idUser` int(11) NOT NULL,
  `isDone` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`test_idTest`,`user_idUser`),
  KEY `fk_Test_has_User_User1_idx` (`user_idUser`),
  KEY `fk_Test_has_User_Test1_idx` (`test_idTest`),
  CONSTRAINT `fk_Test_has_User_Test1` FOREIGN KEY (`test_idTest`) REFERENCES `test` (`idTest`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Test_has_User_User1` FOREIGN KEY (`user_idUser`) REFERENCES `users` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumpar data för tabell testverktygdb.test_has_users: ~7 rows (approximately)
/*!40000 ALTER TABLE `test_has_users` DISABLE KEYS */;
INSERT INTO `test_has_users` (`test_idTest`, `user_idUser`, `isDone`) VALUES
	(1, 1, 0),
	(1, 2, 0),
	(1, 3, 0),
	(1, 4, 0),
	(1, 5, 0),
	(2, 2, 0),
	(3, 2, 0);
/*!40000 ALTER TABLE `test_has_users` ENABLE KEYS */;

-- Dumping structure for tabell testverktygdb.users
CREATE TABLE IF NOT EXISTS `users` (
  `idUser` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `authorisation` int(11) NOT NULL,
  `classes_idClasses` int(11) NOT NULL,
  PRIMARY KEY (`idUser`),
  KEY `fk_users_classes1_idx` (`classes_idClasses`),
  CONSTRAINT `fk_users_classes1` FOREIGN KEY (`classes_idClasses`) REFERENCES `classes` (`idClasses`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

-- Dumpar data för tabell testverktygdb.users: ~29 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`idUser`, `email`, `password`, `authorisation`, `classes_idClasses`) VALUES
	(1, 'conrad@letelier.email', 'abc', 1, 1),
	(2, 'andreas@Vettefors.se', 'abc', 1, 1),
	(3, 'ramona@chantaf.se', 'abc', 1, 1),
	(4, 'hampus@karlsson.se', 'abc', 1, 1),
	(5, 'alexis@knöös.se', 'abc', 1, 1),
	(6, 'sven@hotmail.com', 'abc', 1, 2),
	(7, 'karl@hotmail.com', 'abc', 1, 2),
	(8, 'fredrik@hotmail.com', 'abc', 1, 2),
	(9, 'niklas@hotmail.com', 'abc', 1, 2),
	(10, 'nicolas@hotmail.com', 'abc', 1, 2),
	(11, 'frank@hotmail.com', 'abc', 1, 3),
	(12, 'driton@hotmail.com', 'abc', 1, 3),
	(13, 'alexander@hotmail.com', 'abc', 1, 3),
	(14, 'milos@hotmail.com', 'abc', 1, 4),
	(15, 'christian@hotmail.com', 'abc', 1, 4),
	(16, 'enrique@hotmail.com', 'abc', 1, 4),
	(17, 'frida@hotmail.com', 'abc', 1, 5),
	(18, 'mark@hotmail.com', 'abc', 1, 5),
	(19, 'olle@hotmail.com', 'abc', 1, 5),
	(20, 'jonathan@hotmail.com', 'abc', 1, 6),
	(21, 'alban@hotmail.com', 'abc', 1, 6),
	(22, 'simon@hotmail.com', 'abc', 1, 6),
	(23, 'lars@hotmail.com', 'abc', 1, 6),
	(24, 'anna@hotmail.com', 'abc', 1, 6),
	(25, 'maria@hotmail.com', 'abc', 1, 6),
	(26, 'berit@hotmail.com', 'abc', 1, 6),
	(27, 'tarek@hotmail.com', 'abc', 1, 6),
	(34, 'Malin@hotmail.com', 'abc', 2, 7),
	(35, 'Monique@hotmail.com', 'abc', 3, 7);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for view testverktygdb.testresults
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `testresults`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `testresults` AS select `studentanswers`.`user_idUser` AS `user_idUser`,`questions`.`test_idTest` AS `test_idTest`,`questions`.`question` AS `question`,`answeroptions`.`answer` AS `answer`,`answeroptions`.`isCorrect` AS `isCorrect` from ((`studentanswers` join `questions` on((`questions`.`idQuestion` = `studentanswers`.`answerOptions_questions_idQuestion`))) join `answeroptions` on((`answeroptions`.`idAnswerOption` = `studentanswers`.`answerOptions_idAnswerOption`)));

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
