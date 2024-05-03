const express = require('express')
const mongoose = require('mongoose')
const app = express()
const myRoutes = require('./routes/route')
const cors = require('cors')



app.use(express.urlencoded({extended: false}))
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors())

app.get("/", (req, res) => {
    res.send({message: "hrllo woerld"})
})
app.use("/api", myRoutes)
 
mongoose.connect("mongodb+srv://admin:admin@emmanuel.q96slry.mongodb.net/Node-api?retryWrites=true&w=majority")
.then(() => {
    console.log('connected to database')
    app.listen(5000, (() => (
        console.log("running at port 5000")
    ))) 
}).catch((error) => {
    console.log(error)
})   