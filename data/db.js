const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./data/mundiales.db");

module.exports = db;