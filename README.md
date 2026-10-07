# sistema_escolar — Generador de datos de prueba

**Creador:** Josué Martínez — [@Lalocarrito](https://github.com/Lalocarrito)

Genera registros ficticios de alumnos (hasta 50,000) para probar bases de datos escolares.
Exporta en SQL (MySQL y PostgreSQL), CSV o JSON, todo desde el navegador, sin servidor.

## Uso

Abre `generador.html` en el navegador, elige la cantidad y el formato, y presiona
**Generar**. Con **Guardar Archivo** descargas el resultado.

## Base de datos

`creacion.sql` crea la tabla `alumnos` (con restricciones y un trigger de `TRIM`) y trae
varios `INSERT` de prueba.
