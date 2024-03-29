require('dotenv').config();
const mongoose = require('mongoose')
// const express = require('express');
const { connectDB } = require('./DB/db');
const { app } = require('./app');
// const app = express();


connectDB()  //executing the database connection into the main file 
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`server is running at port ${process.env.PORT}`);
    })

})
.catch((err)=>{
    console.log('error connecting database',err)
})