const express = require("express");
const db = require("../data/db");

const router = express.Router();

router.get("/", (req, res) => {

    db.all(
        "SELECT * FROM mundiales",
        [],
        (err, rows) => {

            if(err){
                return res.status(500).json({
                    error:"Error BD"
                });
            }

            if(req.query.include === "full"){
                return res.json(rows);
            }

            res.json(
                rows.map(m => ({
                    nombre: m.nombre,
                    slug: m.slug
                }))
            );
        }
    );
});

module.exports = router;