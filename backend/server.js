const express = require("express");
const cors = require("cors")
const colors = require('colors')
const { db } = require("./config/db");
require("dotenv").config({ path: "./config/.env" })
const todoRoutes = require("./routes/todoRoutes")

const app = express()
db()

app.use(cors())

app.use(express.json())
app.use("/api", todoRoutes)

const PORT = process.env.PORT

app.listen(PORT, (err) => {
    err && console.log(err + "error");
    console.log(`server running http://localhost:${PORT}`);
})