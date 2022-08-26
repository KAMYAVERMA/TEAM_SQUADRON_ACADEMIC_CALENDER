const mongoose = require("mongoose")

const registrationSchema = new mongoose.Schema({
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
    },
    address:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    levels:{
        type:String,
        required:true
    }
})

registrationSchema.pre("save", async function (next){

    if (this.isModified("password")){
    // const passwordhash = await bcrypt.hash(password,10)
    
    console.log(`the current password ${this.password}`)
    this.password = await bcrypt.hash(this.password,10);
    //this.confirmpassword = await bcrypt.hash(this.password,10);
    console.log(`the current password ${this.password}`)
    //this.confirmpassword = undefined 
    }
    next()
})

const register_univ = new mongoose.model("egister_univ",registrationSchema)
module.exports = register_univ