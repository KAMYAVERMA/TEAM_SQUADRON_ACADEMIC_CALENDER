const mongoose = require("mongoose")

const adddataSchema = new mongoose.Schema({
    event_name:{
        type:String,
        required:true
    },
    date_time_start :{ type: String, default: Date },
    date_time_end:
 { type: String, default: Date} ,
    description:{
        type:String,
        required:true
    },
    erp_add:{
        type:String,
        required:true
    }
})

const add = new mongoose.model("add",adddataSchema) // In singular, would get changed to plural automatically
module.exports = add