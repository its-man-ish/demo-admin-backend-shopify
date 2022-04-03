const express = require("express")
const connectDB = require("./database/connection")
const dotenv = require('dotenv').config()
const morgan = require('morgan')
const orderRoute = require("./routes/order")
const storeRoute = require('./routes/store')
var cors = require('cors')
const app = express()

const PORT = 3000 || process.env.PORT
app.use(cors())
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Server Running")
})

//connecting database
connectDB()
app.use(morgan('tiny'))
app.use('/shopify',storeRoute)
app.use('/shopify',orderRoute)


app.listen(PORT,()=>{
    console.log(`server on http://localhost:${PORT}`)
})