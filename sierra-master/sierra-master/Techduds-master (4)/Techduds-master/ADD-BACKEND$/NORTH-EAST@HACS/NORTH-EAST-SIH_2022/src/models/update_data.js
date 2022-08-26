const mongoose = require("mongoose")

const adddataSchema = new mongoose.Schema({
    event_name_update:{
        type:String,
        required:true
    },
    prev_date:
    { type: String, default: Date} ,
    new_date:{ type: String, default: Date} ,
    description_update:{
        type:String,
        required:true
    },
    regions:{
        type:String,
        required:false
    }
})

const update = new mongoose.model("update",adddataSchema) // In singular, would get changed to plural automatically
module.exports = update