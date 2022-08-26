const express = require('express')

const router = express.Router()
const add = require("../src/models/add_data")

router.get("/adddata",(req,res)=>{
    res.render("adddata")
})


router.post("/adddata",async (req,res)=>{
    try{
         const added=new add({
             event_name : req.body.event_name,
             date_time_start : req.body.date_time_start,
             date_time_end : req.body.date_time_end,
             description : req.body.description,
             regions : req.body.regions,
             erp_add : req.body.erp_add
         }) 
         const added_data = await added.save();
         console.log("the success part" + added_data);
         res.status(201).render("index_2")
    }
    catch(error){
        res.status(500).json(error)
        console.log(error)
    }
})
module.exports = router