const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth")
require("dotenv").config();

const app = express()

app.use(cors());
app.use(express.json())
app.use("/", authRoutes)

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Polaczono z MongoDB")
})
.catch((err)=>{
    console.log(err)
})

app.get("/", (req,res)=> {
    res.send("Backend dziala")
})

app.listen(5000,()=>{
    console.log("Serwer jest na 5000")
})