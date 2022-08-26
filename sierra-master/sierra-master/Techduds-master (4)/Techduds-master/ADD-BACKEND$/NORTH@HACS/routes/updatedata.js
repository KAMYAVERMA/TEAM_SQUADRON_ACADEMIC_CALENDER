const express = require('express')
const router = express.Router()
const update = require("../src/models/update_data")

router.get("/updatedata",(req,res)=>{
    res.render("updatedata")
})

router.post("/updatedata",async (req,res) =>{

    try{
        const updated=new update({
            event_name_update : req.body.event_name_update,
            prev_date : req.body.prev_date,
            new_date : req.body.new_date,
            description_update : req.body.description_update,
            options : req.body.options
        })
    
    const updated_data = await updated.save();
          console.log("the success part" + updated_data);
          res.status(201).render("index_2")
     }
     catch(error){
         res.status(500).json(error)
         console.log(error)
     }
})

module.exports = router