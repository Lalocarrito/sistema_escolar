# sistema_escolar — Generador de datos de prueba

> Herramienta web que genera **registros ficticios de alumnos** en formato SQL, CSV o JSON
> para probar bases de datos escolares.

Es una página estática (**HTML + JavaScript** con Tailwind por CDN): no necesita build ni
servidor. Abres `generador.html`, eliges cuántos registros y el formato, y obtienes el
contenido listo para descargar o pegar en tu base de datos.

![HTML](https://img.shields.io/badge/HTML-est%C3%A1tico-E34F26)
![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E)
![Tailwind](https://img.shields.io/badge/Tailwind-CDN-38BDF8)

---

## Tabla de contenido

- [Características](#características)
- [Formatos de salida](#formatos-de-salida)
- [Requisitos](#requisitos)
- [Uso](#uso)
- [Esquema de la tabla `alumnos`](#esquema-de-la-tabla-alumnos)
- [Autor](#autor)

---

## Características

- Genera de **1 a 50 000** registros.
- **Cuatro formatos** de salida: SQL (MySQL/MariaDB), SQL (PostgreSQL), CSV y JSON.
- Nombres y apellidos **aleatorios**: apellidos mexicanos y rusos, nombres mexicanos y
  franceses.
- Soporta **segundo apellido opcional** (se emite `NULL`) y **segundo nombre opcional**.
- **Validación** del número de registros con alertas en la interfaz.
- **Descarga** el resultado como archivo (`sistema_escolar.sql`, `.csv`, `.json`, etc.).

## Formatos de salida

| Opción | Descripción                          | Archivo descargado             |
|--------|--------------------------------------|--------------------------------|
| 1      | SQL para MySQL / MariaDB             | `sistema_escolar.sql`          |
| 2      | SQL para PostgreSQL                  | `sistema_escolar_postgres.sql` |
| 3      | CSV                                  | `sistema_escolar.csv`          |
| 4      | JSON                                 | `sistema_escolar.json`         |

> Nota: las opciones **1 y 2 generan el mismo SQL**; solo cambia el nombre del archivo.

## Requisitos

- Un **navegador web** (la generación y descarga son 100 % en el cliente).
- Para usar [`creacion.sql`](creacion.sql): un gestor **MySQL/MariaDB** o **PostgreSQL**.

## Uso

1. Abre `generador.html` en el navegador (doble clic o sírvelo con cualquier servidor
   estático).
2. Escribe el **número de registros** (1–50000) o usa los botones rápidos.
3. Elige el **tipo de archivo**.
4. Presiona **Generar** para ver el resultado en pantalla.
5. Presiona **Guardar Archivo** para descargarlo.

## Esquema de la tabla `alumnos`

Definida en [`creacion.sql`](creacion.sql):

| Columna      | Tipo           | Restricciones                                             |
|--------------|----------------|-----------------------------------------------------------|
| `expediente` | `INTEGER`      | `UNIQUE`, 9 dígitos y `> 0`                               |
| `app1`       | `VARCHAR(255)` | `NOT NULL`, sin espacios al inicio/fin (`TRIM` trigger)   |
| `app2`       | `VARCHAR(255)` | Opcional (puede ser `NULL`)                               |
| `nombres`    | `VARCHAR(255)` | `NOT NULL`                                                |
| `correo`     | `VARCHAR(255)` | `UNIQUE`, debe ser `a<expediente>@unison.mx`              |

El script incluye además un **trigger de `TRIM`** y varios `INSERT` de prueba (válidos e
inválidos) para ejercitar las restricciones.


## Autor

**Josué Martínez** — [@Lalocarrito](https://github.com/Lalocarrito)
