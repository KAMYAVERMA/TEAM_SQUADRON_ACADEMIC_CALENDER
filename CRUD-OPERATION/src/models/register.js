const mongoose = require("mongoose")

const superadminSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
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

superadminSchema.pre("save", async function (next){

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

const super_admin = new mongoose.model("super_admin",superadminSchema) // In singular, would get changed to plural automatically
module.exports = super_admin



