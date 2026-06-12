const express = require("express");
const db = require("../data/db");
const SearchSchema = require("./search.schema");

const router = express.Router();

router.get("/:text",(req,res)=>{

    const result = SearchSchema.safeParse({
        text:req.params.text
    });

    if(!result.success){

        return res.status(400).json({
            error:"Debe tener minimo 3 caracteres"
        });
    }

    const text = `%${req.params.text}%`;

    db.all(
        `
        SELECT *
        FROM mundiales
        WHERE resumen LIKE ?
        OR descripcion LIKE ?
        `,
        [text,text],
        (err,rows)=>{
            res.json(rows);
        }
    );
});

module.exports = router;