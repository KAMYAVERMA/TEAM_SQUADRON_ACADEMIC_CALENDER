const mongoose = require("mongoose")

const university_registration = new mongoose.Schema({
    university_name:{
        type:String,
        required:true
    },
    user_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        //unique:true
    },
    confirmpassword:{
        type:String,
        required:true,
        //unique:true
    }
})

const university_admin = new mongoose.model("university_admin",university_registration) // In singular, would get changed to plural automatically
module.exports = university_admin