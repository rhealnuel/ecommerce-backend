const express = require('express')
const mongoose = require('mongoose')
const app = express()
const myRoutes = require('./routes/route')
const cors = require('cors')
require('dotenv').config()

const URI = process.env.URI

app.use(express.urlencoded({extended: false}))
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors())

app.get("/", (req, res) => {
    res.send({message: "hrllo woerld"})
})
app.use("/api", myRoutes)
 
mongoose.connect(URI)
.then(() => {
    console.log('connected to database')
    app.listen(5000, (() => (
        console.log("running at port 5000")
    ))) 
}).catch((error) => {
    console.log(error)
})   