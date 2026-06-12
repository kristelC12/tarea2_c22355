CREATE TABLE IF NOT EXISTS mundiales (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    anio INTEGER,
    sede TEXT,
    campeon TEXT,
    subcampeon TEXT,
    goleador TEXT,
    equipos INTEGER,
    imagen TEXT,
    slug TEXT UNIQUE,
    resumen TEXT,
    descripcion TEXT
);