const sqlite3 = require("sqlite3").verbose();
const mundiales = require("./data.json");

const db = new sqlite3.Database("./data/mundiales.db");

db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS mundiales (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            anio INTEGER NOT NULL,
            sede TEXT NOT NULL,
            campeon TEXT NOT NULL,
            subcampeon TEXT NOT NULL,
            goleador TEXT NOT NULL,
            equipos INTEGER NOT NULL,
            imagen TEXT NOT NULL,
            slug TEXT UNIQUE NOT NULL,
            resumen TEXT NOT NULL,
            descripcion TEXT NOT NULL
        )
    `);

    const stmt = db.prepare(`
        INSERT OR IGNORE INTO mundiales (
            nombre,
            anio,
            sede,
            campeon,
            subcampeon,
            goleador,
            equipos,
            imagen,
            slug,
            resumen,
            descripcion
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    mundiales.forEach(mundial => {

        stmt.run(
            mundial.nombre,
            mundial.anio,
            mundial.sede,
            mundial.campeon,
            mundial.subcampeon,
            mundial.goleador,
            mundial.equipos,
            mundial.imagen,
            mundial.slug,
            mundial.resumen,
            mundial.descripcion
        );

    });

    stmt.finalize();

    console.log("Base de datos creada correctamente.");

});

db.close();