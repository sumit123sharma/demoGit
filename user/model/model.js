// create a user schema

const mongoose =  require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
    },
    phone:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    }
})       


module.exports = mongoose.model("user" , userSchema)     // now require this file in controller.js
