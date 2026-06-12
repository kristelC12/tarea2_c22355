const express = require("express");
const db = require("../data/db");

const router = express.Router();

router.get("/",(req,res)=>{

    db.get(
        "SELECT * FROM mundiales ORDER BY RANDOM() LIMIT 1",
        [],
        (err,row)=>{
            res.json(row);
        }
    );
});

module.exports = router;