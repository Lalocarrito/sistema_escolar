DROP TABLE alumnos;

CREATE TABLE IF NOT EXISTS alumnos (
    expediente INTEGER NOT NULL UNIQUE CHECK(LENGTH(expediente)=9 AND expediente > 0),
    app1 VARCHAR(255) NOT NULL CHECK(LENGTH(TRIM(app1))>0),
    app2 VARCHAR(255) CHECK (app2 IS NULL OR LENGTH(TRIM(app2))>0),
    nombres VARCHAR(255) NOT NULL CHECK (LENGTH(TRIM(nombres))>0),
    correo VARCHAR(255) NOT NULL UNIQUE CHECK(correo=CONCAT("a",expediente,"@unison.mx"))

);


--Trigger para hacer TRIM en el campo de app1

DELIMITER $$

CREATE TRIGGER bi_alumnos_app1
BEFORE INSERT ON alumnos
FOR EACH ROW
BEGIN
    SET NEW.app1 = TRIM(NEW.app1);
END$$

DELIMITER ;



INSERT INTO alumnos  VALUES (null,"Abril","García","José Humberto", "jose.abril@unison.mx");

INSERT INTO alumnos VALUES (0,"Abril","García","José Humberto", "jose.abril@unison.mx");
INSERT INTO alumnos VALUES (224200810,"Abril","García","José Humberto", "jose.abril@unison.mx");

INSERT INTO alumnos VALUES (-224200810,"Abril","García","José Humberto", "jose.abril@unison.mx");
INSERT INTO alumnos VALUES (22420081250,"Abril","García","José Humberto", "jose.abril@unison.mx");

INSERT INTO alumnos VALUES (081250,"Abril","García","José Humberto", "jose.abril@unison.mx");
INSERT INTO alumnos VALUES (111081250,"","García","José Humberto", "jose.abr23il@unison.mx");
INSERT INTO alumnos VALUES (112081250,"       ","García","José Humberto", "jose.abr24il@unison.mx");
INSERT INTO alumnos VALUES (113081255,"       a               ","García","José Humberto", "jose.abr27il@unison.mx");
INSERT INTO alumnos VALUES (113081250,"       a","García","José Humberto", "jose.abr25il@unison.mx");
INSERT INTO alumnos VALUES (113081251,"a       ","García","José Humberto", "jose.abr26il@unison.mx");
INSERT INTO alumnos VALUES (244223121,"b                         ","García","José Humberto", "abr26il@unison.mx");
INSERT INTO alumnos VALUES (113081251,"Lopez","      ","José Humberto", "jose.abr87il@unison.mx");
INSERT INTO alumnos VALUES (113081253,"Lopez",NULL,"José Humberto", "jose.abr29il@unison.mx");
INSERT INTO alumnos VALUES (224200810,"Martínez","Ruiz","Josué Ignacio", "a224200810@unison.mx");
INSERT INTO alumnos  VALUES (216217591,"Martínez","Ruiz","Iván", "a216217591@unison.mx");


--INSERT EN POSTGRES


INSERT INTO alumnos VALUES (224200810,'Martínez','Ruiz','Josué Ignacio', 'a224200810@unison.mx');
INSERT INTO alumnos  VALUES (216217591,'Martínez','Ruiz','Iván', 'a216217591@unison.mx');
    
