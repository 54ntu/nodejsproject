const express = require('express')
const cors = require('cors')
const cookieParser = require ('cookie-parser')
const app = express()



//note : we use app.use() while using middleware && configuration in our projects

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}))

app.use(express.json({limit:"16kb"})) //we need to limit the json data request to prevent server crashing
app.use(express.urlencoded({extended:true, limit:'16kb'})) //to haandle the data recieving through url request //extended means nested object


app.use(express.static('public')) //static file handling

app.use(cookieParser())

module.exports = { app };