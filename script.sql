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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `IMAGENES`
--

LOCK TABLES `IMAGENES` WRITE;
/*!40000 ALTER TABLE `IMAGENES` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `IMAGENESXPROPIEDAD`
--

LOCK TABLES `IMAGENESXPROPIEDAD` WRITE;
/*!40000 ALTER TABLE `IMAGENESXPROPIEDAD` DISABLE KEYS */;
/*!40000 ALTER TABLE `IMAGENESXPROPIEDAD` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PROPIEDADES`
--

LOCK TABLES `PROPIEDADES` WRITE;
/*!40000 ALTER TABLE `PROPIEDADES` DISABLE KEYS */;
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
  PRIMARY KEY (`id`),
  KEY `idPROPIEDADES` (`idPROPIEDADES`),
  KEY `idAMENITIES` (`idAMENITIES`),
  CONSTRAINT `propiedadesxamenities_ibfk_1` FOREIGN KEY (`idPROPIEDADES`) REFERENCES `PROPIEDADES` (`id`) ON DELETE SET NULL,
  CONSTRAINT `propiedadesxamenities_ibfk_2` FOREIGN KEY (`idAMENITIES`) REFERENCES `AMENITIES` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PROPIEDADESXAMENITIES`
--

LOCK TABLES `PROPIEDADESXAMENITIES` WRITE;
/*!40000 ALTER TABLE `PROPIEDADESXAMENITIES` DISABLE KEYS */;
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
INSERT INTO `USUARIOS` VALUES (1,1,'Juan Perez','DEMO'),(2,2,'Inmobiliario Trebol','DEMO'),(3,1,'Rodrigo Juarez','DEMO'),(4,1,'Nora Cardozo','DEMO'),(5,2,'Inmobiliario Marquex','DEMO');
/*!40000 ALTER TABLE `USUARIOS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'mads'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-02 14:17:59
