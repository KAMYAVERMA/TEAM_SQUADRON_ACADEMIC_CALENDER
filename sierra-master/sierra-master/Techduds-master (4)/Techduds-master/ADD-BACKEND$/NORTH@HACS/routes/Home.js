const express = require('express')
const router = express.Router()

router.get('/',(req,res) =>{
    res.render("index_2")
})

module.exports=router