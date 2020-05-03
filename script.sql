CREATE DATABASE  IF NOT EXISTS `mads` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mads`;
-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
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
-- Table structure for table `amenities`
--

DROP TABLE IF EXISTS `amenities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `amenities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `DESCRIPCION` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amenities`
--

LOCK TABLES `amenities` WRITE;
/*!40000 ALTER TABLE `amenities` DISABLE KEYS */;
INSERT INTO `amenities` VALUES (1,'Asador'),(2,'Cochera'),(3,'Wifi'),(4,'Patio'),(5,'Balcon'),(6,'Ascensor');
/*!40000 ALTER TABLE `amenities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenes`
--

DROP TABLE IF EXISTS `imagenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `URL` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes`
--

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
INSERT INTO `imagenes` VALUES (1,'https://alquilercba.com/uploads/departamento/photos/1169/029-Magna-7-DSC_5348.png'),(2,'https://alquilercba.com/uploads/departamento/photos/1169/069-Magna-7-FSB_2916.png'),(3,'https://alquilercba.com/uploads/departamento/photos/1169/024-Magna-7-FSB_2936.png'),(4,'https://alquilercba.com/uploads/departamento/photos/1169/014-Magna-7-FSB_2901.png'),(5,'https://alquilercba.com/uploads/departamento/photos/1169/002-Magna-7-FSB_2884.png'),(6,'https://alquilercba.com/uploads/departamento/photos/1278/WhatsApp_Image_2020-03-16_at_16.00.26.jpeg'),(7,'https://alquilercba.com/uploads/departamento/photos/1278/WhatsApp_Image_2020-03-16_at_16.00.25__2_.jpeg'),(8,'https://alquilercba.com/uploads/departamento/photos/1278/WhatsApp_Image_2020-03-16_at_16.00.23__2_.jpeg'),(9,'https://alquilercba.com/uploads/departamento/photos/1113/WhatsApp_Image_2019-04-26_at_09.59.51.jpeg'),(10,'https://alquilercba.com/uploads/departamento/photos/1113/WhatsApp_Image_2019-04-26_at_09.59.54__1_.jpeg'),(11,'https://alquilercba.com/uploads/departamento/photos/1113/WhatsApp_Image_2019-04-26_at_09.59.56.jpeg'),(13,'https://alquilercba.com/uploads/departamento/photos/1273/1718673209.jpg'),(14,'https://alquilercba.com/uploads/departamento/photos/1273/1718673215.jpg'),(15,'https://alquilercba.com/uploads/departamento/photos/1273/1718673213.jpg'),(16,'https://alquilercba.com/uploads/departamento/photos/303/unnamed__1_.jpg'),(17,'https://alquilercba.com/uploads/departamento/photos/303/unnamed__2_.jpg'),(18,'https://alquilercba.com/uploads/departamento/photos/303/unnamed__5_.jpg'),(19,'https://alquilercba.com/uploads/departamento/photos/1274/p-264082-101118110334-312390.jpg'),(20,'https://alquilercba.com/uploads/departamento/photos/1274/p-264082-101118110404-105346.jpg'),(21,'https://alquilercba.com/uploads/departamento/photos/1274/p-264082-101118110503-939265.jpg');
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenesxpropiedad`
--

DROP TABLE IF EXISTS `imagenesxpropiedad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenesxpropiedad` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idPROPIEDADES` int DEFAULT NULL,
  `idIMAGENES` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idPROPIEDADES` (`idPROPIEDADES`),
  KEY `idIMAGENES` (`idIMAGENES`),
  CONSTRAINT `imagenesxpropiedad_ibfk_1` FOREIGN KEY (`idPROPIEDADES`) REFERENCES `propiedades` (`id`) ON DELETE SET NULL,
  CONSTRAINT `imagenesxpropiedad_ibfk_2` FOREIGN KEY (`idIMAGENES`) REFERENCES `imagenes` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenesxpropiedad`
--

LOCK TABLES `imagenesxpropiedad` WRITE;
/*!40000 ALTER TABLE `imagenesxpropiedad` DISABLE KEYS */;
INSERT INTO `imagenesxpropiedad` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5),(12,2,6),(13,2,7),(14,2,8),(21,3,9),(22,3,10),(23,3,11),(24,4,13),(25,4,14),(26,4,15),(27,5,16),(28,5,17),(29,5,18),(30,6,19),(31,6,20),(32,6,21);
/*!40000 ALTER TABLE `imagenesxpropiedad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `precios`
--

DROP TABLE IF EXISTS `precios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `precios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `DESCRIPCION` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `precios`
--

LOCK TABLES `precios` WRITE;
/*!40000 ALTER TABLE `precios` DISABLE KEYS */;
INSERT INTO `precios` VALUES (1,'alquiler'),(2,'expensas'),(3,'impuestos');
/*!40000 ALTER TABLE `precios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preciosxpropiedades`
--

DROP TABLE IF EXISTS `preciosxpropiedades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preciosxpropiedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idPROPIEDAD` int NOT NULL,
  `idPRECIO` int NOT NULL,
  `monto` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_idx1` (`idPRECIO`),
  KEY `id_idx` (`idPROPIEDAD`,`idPRECIO`),
  CONSTRAINT `preciosxpropiedad_ibfk_1` FOREIGN KEY (`idPROPIEDAD`) REFERENCES `propiedades` (`id`),
  CONSTRAINT `preciosxpropiedad_ibfk_2` FOREIGN KEY (`idPRECIO`) REFERENCES `precios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preciosxpropiedades`
--

LOCK TABLES `preciosxpropiedades` WRITE;
/*!40000 ALTER TABLE `preciosxpropiedades` DISABLE KEYS */;
INSERT INTO `preciosxpropiedades` VALUES (1,1,1,13000),(2,1,2,500),(3,1,3,0),(4,2,1,13000),(5,2,2,900),(6,2,3,3500),(7,3,1,15000),(8,3,2,900),(9,3,3,3500),(10,5,1,15000),(11,5,2,900),(12,5,3,3500),(13,5,1,15000),(14,5,2,900),(15,5,3,3500),(16,6,1,15000),(17,6,2,1200),(18,6,3,0),(19,4,1,18500),(20,4,2,1250),(21,4,3,4500);
/*!40000 ALTER TABLE `preciosxpropiedades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `propiedades`
--

DROP TABLE IF EXISTS `propiedades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `propiedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `UBICACION` varchar(50) NOT NULL,
  `HABITACIONES` int NOT NULL,
  `FECHAPUBLICACION` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `LATITUD` varchar(50) NOT NULL,
  `LONGITUD` varchar(50) NOT NULL,
  `PROPIETARIO` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `PROPIETARIO` (`PROPIETARIO`),
  CONSTRAINT `propiedades_ibfk_1` FOREIGN KEY (`PROPIETARIO`) REFERENCES `usuarios` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `propiedades`
--

LOCK TABLES `propiedades` WRITE;
/*!40000 ALTER TABLE `propiedades` DISABLE KEYS */;
INSERT INTO `propiedades` VALUES (1,'Calle Estrada al 100',1,'2020-05-02 17:23:10','-31.427539','-64.188326',1),(2,'Av Gral Paz zona Plaza Tablada',1,'2020-04-26 13:32:53','-31.408415','-64.183883',2),(3,'Humberto 1ro - Capitalinas',2,'2020-05-02 17:35:06','-31.407432','-64.191079',3),(4,'Blvd. San Juan al 1000',2,'2020-04-02 17:36:29','-31.417182','-64.199523',2),(5,'Zona cañada al 1500',1,'2020-05-02 17:38:35','-31.434082','-64.202290',4),(6,'Frente al hospital Privado',2,'2020-05-02 17:39:43','-31.443455','-64.199458',5);
/*!40000 ALTER TABLE `propiedades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `propiedadesxamenities`
--

DROP TABLE IF EXISTS `propiedadesxamenities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `propiedadesxamenities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idPROPIEDADES` int DEFAULT NULL,
  `idAMENITIES` int DEFAULT NULL,
  `valor` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idPROPIEDADES` (`idPROPIEDADES`),
  KEY `idAMENITIES` (`idAMENITIES`),
  CONSTRAINT `propiedadesxamenities_ibfk_1` FOREIGN KEY (`idPROPIEDADES`) REFERENCES `propiedades` (`id`) ON DELETE SET NULL,
  CONSTRAINT `propiedadesxamenities_ibfk_2` FOREIGN KEY (`idAMENITIES`) REFERENCES `amenities` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `propiedadesxamenities`
--

LOCK TABLES `propiedadesxamenities` WRITE;
/*!40000 ALTER TABLE `propiedadesxamenities` DISABLE KEYS */;
INSERT INTO `propiedadesxamenities` VALUES (1,1,1,'1'),(2,1,2,'1'),(3,1,3,'1'),(4,1,4,'1'),(5,1,5,'1'),(6,1,6,'1'),(7,2,1,'1'),(8,2,2,'0'),(9,2,3,'0'),(10,2,4,'0'),(11,2,5,'0'),(12,2,6,'1'),(13,3,1,'1'),(14,3,2,'0'),(15,3,3,'1'),(16,3,4,'0'),(17,3,5,'0'),(18,3,6,'1'),(19,4,1,'0'),(20,4,2,'1'),(21,4,3,'0'),(22,4,4,'0'),(23,4,5,'0'),(24,4,6,'0'),(25,5,1,'0'),(26,5,2,'1'),(27,5,3,'1'),(28,5,4,'0'),(29,5,5,'0'),(30,5,6,'0'),(31,6,1,'0'),(32,6,2,'1'),(33,6,3,'1'),(34,6,4,'1'),(35,6,5,'0'),(36,6,6,'0');
/*!40000 ALTER TABLE `propiedadesxamenities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `DESCRIPCION` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Propietario'),(2,'Inmobiliaria'),(3,'Inquilino');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ROL` int DEFAULT NULL,
  `USER` varchar(25) NOT NULL,
  `PASSWORD` varchar(25) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ROL` (`ROL`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`ROL`) REFERENCES `roles` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,1,'Juan Perez','DEMO'),(2,2,'Trebol','DEMO'),(3,1,'Rodrigo Juarez','DEMO'),(4,1,'Nora Cardozo','DEMO'),(5,2,'Inmobiliario Marquex','DEMO');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'mads'
--
/*!50003 DROP PROCEDURE IF EXISTS `LISTAR_PROPIEDADES` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `LISTAR_PROPIEDADES`()
BEGIN
	SELECT P.ID, P.UBICACION, P.HABITACIONES, P.FECHAPUBLICACION, P.LATITUD, P.LONGITUD, A.DESCRIPCION, PxA.VALOR, I.URL, PXPR.MONTO, PXPR.idPRECIO, PR.DESCRIPCION, U.ROL, R.DESCRIPCION
	FROM PROPIEDADES P
	INNER JOIN PROPIEDADESXAMENITIES PxA ON (P.id = PxA.idPROPIEDADES)
	INNER JOIN AMENITIES A ON (PxA.idAMENITIES = A.ID)
	INNER JOIN IMAGENESXPROPIEDAD IxP ON (P.ID = IxP.idPROPIEDADES)
	INNER JOIN IMAGENES I ON (I.ID = IxP.idIMAGENES)
    INNER JOIN PRECIOSXPROPIEDADES PXPR ON (P.id = PXPR.idPROPIEDAD)
    INNER JOIN PRECIOS PR ON (PXPR.idPRECIO = PR.id )
    INNER JOIN USUARIOS U ON (P.PROPIETARIO = U.id)
    INNER JOIN ROLES R ON (U.ROL = R.id);
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

-- Dump completed on 2020-05-03 18:40:08
