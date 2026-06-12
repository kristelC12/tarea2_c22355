const express = require("express");
const db = require("../data/db");

const router = express.Router();

router.get("/:pais",(req,res)=>{

    db.all(
        "SELECT slug FROM mundiales WHERE campeon = ?",
        [req.params.pais],
        (err,rows)=>{

            if(rows.length === 0){
                return res.status(404).json({
                    error:"Pais no encontrado"
                });
            }

            res.json(rows);
        }
    );
});

module.exports = router;