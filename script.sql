CREATE DATABASE mads;
USE mads;

CREATE TABLE ROLES (
	id INT(6) AUTO_INCREMENT PRIMARY KEY,
    DESCRIPCION varchar(25) NOT NULL
);
INSERT INTO ROLES (DESCRIPCION)
VALUES ("Propietario");


CREATE TABLE USUARIOS (
	id INT(6) AUTO_INCREMENT PRIMARY KEY,
    ROL INT(6),
    USER varchar(25) NOT NULL,
    PASSWORD varchar(25) NOT NULL,
    FOREIGN KEY (ROL) REFERENCES ROLES (id) ON DELETE SET NULL
);

INSERT INTO USUARIOS (ROL, USER, PASSWORD)
VALUES (1,'DEMO','DEMO');

CREATE TABLE PROPIEDADES (
	id INT(8) AUTO_INCREMENT PRIMARY KEY,
	UBICACION varchar(25) NOT NULL,
	HABITACIONES int(1) NOT NULL,
	PRECIO float4 NOT NULL,
	PROPIETARIO INT(6),
	FOREIGN KEY (PROPIETARIO) REFERENCES USUARIOS (id) ON DELETE SET NULL	
);

INSERT INTO PROPIEDADES (UBICACION, HABITACIONES, PRECIO, PROPIETARIO)
VALUES ('Zona Nueva Cordoba', 1, 13500.00, 1);

CREATE TABLE PUBLICACIONES (
	id INT(8) AUTO_INCREMENT PRIMARY KEY,
    FECHAPUBLICACION TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    USUARIO INT(6),
    PROPIEDAD INT(6),
	FOREIGN KEY (USUARIO) REFERENCES USUARIOS (id) ON DELETE SET NULL,
	FOREIGN KEY (PROPIEDAD) REFERENCES PROPIEDADES (id) ON DELETE SET NULL
);

INSERT INTO PUBLICACIONES (USUARIO, PROPIEDAD) VALUES (1,1);

CREATE DEFINER=`root`@`localhost` PROCEDURE `LISTAR_PUBLICACIONES`()
BEGIN
	SELECT Pub.ID, Pro.UBICACION, Pro.HABITACIONES, Pro.PRECIO, U.USER ,Pub.FECHAPUBLICACION 
	FROM PUBLICACIONES Pub
	INNER JOIN PROPIEDADES Pro ON (Pub.PROPIEDAD = Pro.ID)
	INNER JOIN USUARIOS U ON (Pub.USUARIO = U.ID);
END


