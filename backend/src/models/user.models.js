const  mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true, //
    },
    email:{
        type:String,
    
    },
    password:{
        type:String,
    }

},{timestamps:true}) 

module.exports = mongoose.model("users",userSchema)