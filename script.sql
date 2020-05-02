CREATE DATABASE  IF NOT EXISTS `mads` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mads`;
-- MySQL dump 10.13  Distrib 8.0.18, for macos10.14 (x86_64)
--
-- Host: localhost    Database: mads
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `AMENITIES`
--

DROP TABLE IF EXISTS `AMENITIES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `AMENITIES` (
  `id` int NOT NULL AUTO_INCREMENT,
  `DESCRIPCION` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AMENITIES`
--

LOCK TABLES `AMENITIES` WRITE;
/*!40000 ALTER TABLE `AMENITIES` DISABLE KEYS */;
INSERT INTO `AMENITIES` VALUES (1,'Asador'),(2,'Cochera'),(3,'Wifi'),(4,'Patio'),(5,'Balcon'),(6,'Ascensor');
/*!40000 ALTER TABLE `AMENITIES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `IMAGENES`
--

DROP TABLE IF EXISTS `IMAGENES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `IMAGENES` (
  `id` int NOT NULL AUTO_INCREMENT,
  `URL` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `IMAGENES`
--

LOCK TABLES `IMAGENES` WRITE;
/*!40000 ALTER TABLE `IMAGENES` DISABLE KEYS */;
INSERT INTO `IMAGENES` VALUES (1,'https://static1.sosiva451.com/6099415/915a06af-8e6'),(2,'https://static1.sosiva451.com/6099415/15ad4336-a27'),(3,'https://static1.sosiva451.com/6099415/e923fa3f-a4e'),(4,'https://static1.sosiva451.com/6099415/9d0751f7-964'),(5,'https://static1.sosiva451.com/6099415/d1397feb-23f');
/*!40000 ALTER TABLE `IMAGENES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `IMAGENESXPROPIEDAD`
--

DROP TABLE IF EXISTS `IMAGENESXPROPIEDAD`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `IMAGENESXPROPIEDAD` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idPROPIEDADES` int DEFAULT NULL,
  `idIMAGENES` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idPROPIEDADES` (`idPROPIEDADES`),
  KEY `idIMAGENES` (`idIMAGENES`),
  CONSTRAINT `imagenesxpropiedad_ibfk_1` FOREIGN KEY (`idPROPIEDADES`) REFERENCES `PROPIEDADES` (`id`) ON DELETE SET NULL,
  CONSTRAINT `imagenesxpropiedad_ibfk_2` FOREIGN KEY (`idIMAGENES`) REFERENCES `IMAGENES` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `IMAGENESXPROPIEDAD`
--

LOCK TABLES `IMAGENESXPROPIEDAD` WRITE;
/*!40000 ALTER TABLE `IMAGENESXPROPIEDAD` DISABLE KEYS */;
INSERT INTO `IMAGENESXPROPIEDAD` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5);
/*!40000 ALTER TABLE `IMAGENESXPROPIEDAD` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PRECIOS`
--

DROP TABLE IF EXISTS `PRECIOS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PRECIOS` (
  `id` int NOT NULL AUTO_INCREMENT,
  `DESCRIPCION` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PRECIOS`
--

LOCK TABLES `PRECIOS` WRITE;
/*!40000 ALTER TABLE `PRECIOS` DISABLE KEYS */;
INSERT INTO `PRECIOS` VALUES (1,'alquiler'),(2,'expensas'),(3,'impuestos');
/*!40000 ALTER TABLE `PRECIOS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PRECIOSXPROPIEDADES`
--

DROP TABLE IF EXISTS `PRECIOSXPROPIEDADES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PRECIOSXPROPIEDADES` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idPROPIEDAD` int NOT NULL,
  `idPRECIO` int NOT NULL,
  `monto` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_idx1` (`idPRECIO`),
  KEY `id_idx` (`idPROPIEDAD`,`idPRECIO`),
  CONSTRAINT `preciosxpropiedad_ibfk_1` FOREIGN KEY (`idPROPIEDAD`) REFERENCES `PROPIEDADES` (`id`),
  CONSTRAINT `preciosxpropiedad_ibfk_2` FOREIGN KEY (`idPRECIO`) REFERENCES `PRECIOS` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PRECIOSXPROPIEDADES`
--

LOCK TABLES `PRECIOSXPROPIEDADES` WRITE;
/*!40000 ALTER TABLE `PRECIOSXPROPIEDADES` DISABLE KEYS */;
INSERT INTO `PRECIOSXPROPIEDADES` VALUES (1,1,1,13000),(2,1,2,500),(3,1,3,0),(4,2,1,13000),(5,2,2,900),(6,2,3,3500),(7,3,1,15000),(8,3,2,900),(9,3,3,3500),(10,5,1,15000),(11,5,2,900),(12,5,3,3500),(13,5,1,15000),(14,5,2,900),(15,5,3,3500),(16,6,1,15000),(17,6,2,1200),(18,6,3,0);
/*!40000 ALTER TABLE `PRECIOSXPROPIEDADES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PROPIEDADES`
--

DROP TABLE IF EXISTS `PROPIEDADES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PROPIEDADES` (
  `id` int NOT NULL AUTO_INCREMENT,
  `UBICACION` varchar(50) NOT NULL,
  `HABITACIONES` int NOT NULL,
  `FECHAPUBLICACION` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `LATITUD` varchar(50) NOT NULL,
  `LONGITUD` varchar(50) NOT NULL,
  `PROPIETARIO` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `PROPIETARIO` (`PROPIETARIO`),
  CONSTRAINT `propiedades_ibfk_1` FOREIGN KEY (`PROPIETARIO`) REFERENCES `USUARIOS` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PROPIEDADES`
--

LOCK TABLES `PROPIEDADES` WRITE;
/*!40000 ALTER TABLE `PROPIEDADES` DISABLE KEYS */;
INSERT INTO `PROPIEDADES` VALUES (1,'Calle Estrada al 100',1,'2020-05-02 17:23:10','-31.427539','-64.188326',1),(2,'Av Gral Paz zona Plaza Tablada',1,'2020-04-26 13:32:53','-31.408415','-64.183883',2),(3,'Humberto 1ro - Capitalinas',2,'2020-05-02 17:35:06','-31.407432','-64.191079',3),(4,'Blvd. San Juan al 1000',2,'2020-04-02 17:36:29','-31.417182','-64.199523',2),(5,'Zona cañada al 1500',1,'2020-05-02 17:38:35','-31.434082','-64.202290',4),(6,'Frente al hospital Privado',2,'2020-05-02 17:39:43','-31.443455','-64.199458',5);
/*!40000 ALTER TABLE `PROPIEDADES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PROPIEDADESXAMENITIES`
--

DROP TABLE IF EXISTS `PROPIEDADESXAMENITIES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PROPIEDADESXAMENITIES` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idPROPIEDADES` int DEFAULT NULL,
  `idAMENITIES` int DEFAULT NULL,
  `valor` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idPROPIEDADES` (`idPROPIEDADES`),
  KEY `idAMENITIES` (`idAMENITIES`),
  CONSTRAINT `propiedadesxamenities_ibfk_1` FOREIGN KEY (`idPROPIEDADES`) REFERENCES `PROPIEDADES` (`id`) ON DELETE SET NULL,
  CONSTRAINT `propiedadesxamenities_ibfk_2` FOREIGN KEY (`idAMENITIES`) REFERENCES `AMENITIES` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PROPIEDADESXAMENITIES`
--

LOCK TABLES `PROPIEDADESXAMENITIES` WRITE;
/*!40000 ALTER TABLE `PROPIEDADESXAMENITIES` DISABLE KEYS */;
INSERT INTO `PROPIEDADESXAMENITIES` VALUES (1,1,1,'1'),(2,1,2,'1'),(3,1,3,'1'),(4,1,4,'1'),(5,1,5,'1'),(6,1,6,'1'),(7,2,1,'1'),(8,2,2,'0'),(9,2,3,'0'),(10,2,4,'0'),(11,2,5,'0'),(12,2,6,'1'),(13,3,1,'1'),(14,3,2,'0'),(15,3,3,'1'),(16,3,4,'0'),(17,3,5,'0'),(18,3,6,'1'),(19,4,1,'0'),(20,4,2,'1'),(21,4,3,'0'),(22,4,4,'0'),(23,4,5,'0'),(24,4,6,'0'),(25,5,1,'0'),(26,5,2,'1'),(27,5,3,'1'),(28,5,4,'0'),(29,5,5,'0'),(30,5,6,'0'),(31,6,1,'0'),(32,6,2,'1'),(33,6,3,'1'),(34,6,4,'1'),(35,6,5,'0'),(36,6,6,'0');
/*!40000 ALTER TABLE `PROPIEDADESXAMENITIES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ROLES`
--

DROP TABLE IF EXISTS `ROLES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ROLES` (
  `id` int NOT NULL AUTO_INCREMENT,
  `DESCRIPCION` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ROLES`
--

LOCK TABLES `ROLES` WRITE;
/*!40000 ALTER TABLE `ROLES` DISABLE KEYS */;
INSERT INTO `ROLES` VALUES (1,'Propietario'),(2,'Inmobiliaria'),(3,'Inquilino');
/*!40000 ALTER TABLE `ROLES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `USUARIOS`
--

DROP TABLE IF EXISTS `USUARIOS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `USUARIOS` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ROL` int DEFAULT NULL,
  `USER` varchar(25) NOT NULL,
  `PASSWORD` varchar(25) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ROL` (`ROL`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`ROL`) REFERENCES `ROLES` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USUARIOS`
--

LOCK TABLES `USUARIOS` WRITE;
/*!40000 ALTER TABLE `USUARIOS` DISABLE KEYS */;
INSERT INTO `USUARIOS` VALUES (1,1,'Juan Perez','DEMO'),(2,2,'Trebol','DEMO'),(3,1,'Rodrigo Juarez','DEMO'),(4,1,'Nora Cardozo','DEMO'),(5,2,'Inmobiliario Marquex','DEMO');
/*!40000 ALTER TABLE `USUARIOS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'mads'
--
/*!50003 DROP PROCEDURE IF EXISTS `LISTAR_PROPIEDADES` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `LISTAR_PROPIEDADES`()
BEGIN
	SELECT P.ID, P.UBICACION, P.HABITACIONES, P.FECHAPUBLICACION, P.LATITUD, P.LONGITUD, A.DESCRIPCION, PxA.VALOR, IxP.id, I.URL
	FROM PROPIEDADES P
	INNER JOIN PROPIEDADESXAMENITIES PxA ON (P.id = PxA.idPROPIEDADES)
	INNER JOIN AMENITIES A ON (PxA.idAMENITIES = A.ID)
	INNER JOIN IMAGENESXPROPIEDAD IxP ON (P.ID = IxP.idPROPIEDADES)
	INNER JOIN IMAGENES I ON (I.ID = IxP.idIMAGENES);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-02 16:47:51
