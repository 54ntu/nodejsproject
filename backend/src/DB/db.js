const mongoose = require('mongoose');
const DB_NAME= require('constants')

const connectDB = async ()=>{   // if i use 'export' in this line of code an error will occur because of the moduleJS syntax 
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log('database connected successfully');
        
    } catch (error) {
        console.log('error connecting database',error);
        
    }
}


module.exports = {connectDB}; // here i am exporting connectDB by using commonJS syntax
