const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3003
require("./db/conn_add-update_data")
const hbs = require("hbs")
const homeroute = require("../routes/Home.js")
const adddataroute = require("../routes/adddata.js")
const updatedataroute = require("../routes/updatedata")
const up = require("./models/update_data")
const ad = require("./models/add_data")

const static_path = (path.join(__dirname,"../public"))
const template_path = (path.join(__dirname,"../templates/views"))
const partials_path = (path.join(__dirname,"../templates/partials"))

app.use(express.json())
app.use(express.static(static_path))
app.use(express.urlencoded({extended:false}))

app.set("view engine","hbs")

app.set("views",template_path)

hbs.registerPartials(partials_path)

app.use("/",homeroute)
app.use("/",adddataroute)
app.use("/",updatedataroute)


app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})



