const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 8000
require("./db/conn")
const ejs = require("ejs")
const login_regis = require('./models/login-1')
const static_path = (path.join(__dirname,"../public"))
const view_path = (path.join(__dirname,"../views"))
const sa = require("../src/models/register")
const ua = require("../src/models/login-1")
const buffer = require("../src/models/buffer_Dates")
const univ_register = require("../src/models/registration")
const addition = require("../src/models/add_data")


app.use(express.json())
app.use(express.static(static_path))
app.use(express.urlencoded({extended:false}))
app.set("view engine","ejs")

app.set("views",view_path)


app.get("/",(req,res)=>{
    res.render("login")
})

app.post("/login",async (req,res) =>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await sa.findOne({email:email})
        

        if(useremail.password === password){
            res.status(201).render("dashboard")
        } else{
            res.render("login")
        }
    } catch(error){
        res.status(400)
    }
    
})

app.get("/login",(req,res)=>{
    res.render("dashboard")
})

app.get("/register",(req,res)=>{
    res.render("register")
})

app.post("/register",async (req,res) =>{
    try{
        const password = req.body.password
        const cpassword = req.body.confirmpassword

        if (password === cpassword ){
            // const salt = await bcrypt.genSaltSync(10);
            // const hashPass = await bcrypt.hash(password,salt);
            const registerEmployee = new ua({
                university_name : req.body.university_name,
                user_name : req.body.user_name,
                email : req.body.email,
                password : req.body.password,
                confirmpassword : req.body.confirmpassword
            })
            const registered = await registerEmployee.save();
            // console.log("the success part" + registerEmployee);
            res.status(201).render("dashboard")

        } else{
            res.send("Password are not matching")
        }

    } catch(error){
        res.status(500).json(error)
        console.log(error)
    }
})

app.get('/disable',function(req,res){
    ua.find({},(function(err,data){
        if (err) throw err
        
        res.render("disable",{contacts:data})
}))
})

app.get('/edit',function(req,res){
    buffer.find({},(function(err,dates){
        if (err) throw err
        
        res.render("edit",{practo:dates})
}))
})



app.post("/edit",async (req,res)=>{
    const buffered_dates = new buffer({
        odd_sem_course_in : req.body.odd_sem_course_in,
        odd_sem_course_out : req.body.odd_sem_course_out,
        start_odd_end : req.body.start_odd_end,
        end_odd_end : req.body.end_odd_end,
        odd_sem_regis_in : req.body.odd_sem_regis_in,
        odd_sem_regis_out : req.body.odd_sem_regis_out,
        odd_sem_exam_in : req.body.odd_sem_exam_in,
        odd_sem_exam_out : req.body.odd_sem_exam_out,
        odd_sem_sessional_in : req.body.odd_sem_sessional_in,
        odd_sem_sessional_out : req.body.odd_sem_sessional_out,
        odd_sem_theory_in : req.body.odd_sem_theory_in,
        odd_sem_theory_out : req.body.odd_sem_theory_out,
        odd_sem_practical_in : req.body.odd_sem_practical_in,
        odd_sem_practical_out : req.body.odd_sem_practical_out,
        odd_sem_result_in : req.body.odd_sem_result_in,
        odd_sem_result_out : req.body.odd_sem_result_out,
        // EVEN SEMESTER

        even_sem_regis_in : req.body.even_sem_regis_in,
        even_sem_regis_out : req.body.even_sem_regis_out,
        even_form_exam_in : req.body.even_form_exam_in,
        even_form_exam_out : req.body.even_form_exam_out,
        even_sem_sessional_in : req.body.even_sem_sessional_in,
        even_sem_sessional_out : req.body.even_sem_sessional_out,
        even_sem_theory_in : req.body.even_sem_theory_in,
        even_sem_theory_out : req.body.even_sem_theory_out,
        even_sem_practical_in : req.body.even_sem_practical_in,
        even_sem_practical_out : req.body.even_sem_practical_out,
        even_sem_results_in : req.body.even_sem_results_in,
        even_sem_results_out : req.body.even_sem_results_out
    })
    const added_data = await buffered_dates.save();
    res.status(201).render("dashboard")
})

app.get('/SUPER-ADMIN-ACADEMIC-CALENDAR',function(req,res){
    buffer.find({},(function(err,dates){
        if (err) throw err
        
        res.render("SUPER-ADMIN-ACADEMIC-CALENDAR",{practo:dates})
}))
})

app.get("/login-1",(req,res)=>{
      res.render("login-1")
})

app.post("/login-1",async (req,res) =>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await ua.findOne({email:email})
        

        if(useremail.password === password){
            res.status(201).render("calendar")
        } else{
            res.render("login-error")
        }
    } catch(error){
        res.status(400).render("login-error")
    }
    
})

app.get("/dashboard_admin",(req,res)=>{
    res.render("dashboard_admin")
})

app.get("/registration",(req,res)=>{
     res.render("registration")
})

app.get("/adddata",(req,res)=>{
    res.render("adddata")
})

app.post("/adddata",async (req,res)=>{
    try{
         const added=new addition({
             event_name : req.body.event_name,
             date_time_start : req.body.date_time_start,
             date_time_end : req.body.date_time_end,
             description : req.body.description,
             erp_add : req.body.erp_add
         }) 
         const added_data = await added.save();
         //console.log("the success part" + added_data);
         res.status(201).render("calendar")
    }
    catch(error){
        res.status(500).json(error)
        console.log(error)
    }
})
app.post("/registration",async (req,res)=>{
    try{
        const password = req.body.password
        const cpassword = req.body.confirmpassword

        if (password === cpassword ){
            // const salt = await bcrypt.genSaltSync(10);
            // const hashPass = await bcrypt.hash(password,salt);
            const registerUniversity = new univ_register({
                UNIVERSITY : req.body.university_name,
                USERNAME : req.body.user_name,
                EMAIL : req.body.email,
                password : req.body.password,
                confirmpassword : req.body.confirmpassword,
                ADDRESS: req.body.address,
                STATE:req.body.state,
                COURSE : req.body.course,
                LEVELS : req.body.levels
            })
            const registered = await registerUniversity.save();
            // console.log("the success part" + registerUniversity);
            res.status(201).render("admin_dashboard")

        } else{
            res.send("Password are not matching")
        }

    } catch(error){
        res.status(500).json(error)
        console.log(error)
    }
})

app.get('/calendar',function(req,res){
    addition.find({},(function(err,rose){
        if (err) throw err
        
        res.render("calendar",{roses:rose})
}))
})



app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})

