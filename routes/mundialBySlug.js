const express = require("express");
const db = require("../data/db");

const router = express.Router();

router.get("/:slug",(req,res)=>{

    db.get(
        "SELECT * FROM mundiales WHERE slug = ?",
        [req.params.slug],
        (err,row)=>{

            if(!row){
                return res.status(404).json({
                    error:"No encontrado"
                });
            }

            res.json(row);
        }
    );
});

module.exports = router;