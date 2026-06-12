const express = require("express");

const mundiales = require("./routes/mundiales");
const mundialBySlug = require("./routes/mundialBySlug");
const campeon = require("./routes/campeon");
const random = require("./routes/random");
const search = require("./routes/search");

const app = express();

app.use(express.json());

app.use("/imagenes", express.static("images"));

app.get("/",(req,res)=>{

    res.json({
        api:"Mundiales FIFA",
        version:"1.0"
    });
});

app.use("/mundiales", mundiales);
app.use("/mundial", mundialBySlug);
app.use("/campeon", campeon);
app.use("/random", random);
app.use("/search", search);

app.use((req,res)=>{

    res.status(404).json({
        error:"Ruta no encontrada"
    });
});

app.listen(4321,()=>{

    console.log("Servidor en puerto 4321");
});