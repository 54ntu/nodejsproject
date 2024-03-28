require('dotenv').config();
const mongoose = require('mongoose')
const express = require('express');
const { connectDB } = require('./DB/db');
const app = express();


connectDB();  //executing the database connection into the main file


app.listen(process.env.PORT, ()=>{
    console.log(`server is running at port ${process.env.PORT}`)
})