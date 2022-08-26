const mongoose = require("mongoose")

const dates_buffer = new mongoose.Schema({
    odd_sem_course_in:{
     type: String, default: Date,
    },
    odd_sem_course_out:{
        type: String, default: Date,
        
    },
    start_odd_end:{
        type: String, default: Date
    },
    end_odd_end:{
        type: String, default: Date
    },
    odd_sem_regis_in:{
        type: String, default: Date
    },
    odd_sem_regis_out:{
        type: String, default: Date
    },
    odd_sem_exam_in:{ 
        type: String, default: Date
    },
    odd_sem_exam_out:{
        type: String, default: Date
    },
    odd_sem_sessional_in:{
        type: String, default: Date
    },
    odd_sem_sessional_out:{
        type: String, default: Date
    },
    odd_sem_theory_in:{
        type: String, default: Date
    },
    odd_sem_theory_out:{
        type: String, default: Date
    },
    odd_sem_practical_in:{
        type: String, default: Date
    },
    odd_sem_practical_out:{
        type: String, default: Date
    },
    odd_sem_result_in:{
        type: String, default: Date
    },
    odd_sem_result_out:{
        type: String, default: Date
    },
    // EVEN SEMESTER
    even_sem_regis_in:{
        type: String, default: Date
    },
    even_sem_regis_out:{
        type: String, default: Date
    },
    even_form_exam_in:{
        type: String, default: Date
    },
    even_form_exam_out:{
        type: String, default: Date
    },
    even_sem_sessional_in:{
        type: String, default: Date
    },
    even_sem_sessional_out:{
        type: String, default: Date
    },
    even_sem_theory_in:{
        type: String, default: Date
    },
    even_sem_theory_out:{
        type: String, default: Date
    },
    even_sem_practical_in:{
        type: String, default: Date
    },
    even_sem_practical_out:{
        type: String, default: Date
    },
    even_sem_results_in:{
        type: String, default: Date
    },
    even_sem_results_out:{
        type: String, default: Date
    }


})

const super_admin_dates = new mongoose.model("super_admin_dates",dates_buffer)
module.exports = super_admin_dates