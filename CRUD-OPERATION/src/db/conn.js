const { MongoClient } = require('mongodb');

const logins = require('../models/login-1')
var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb+srv://TEAM_SQUADRON:Pass-Team%40squadron@cluster0.y2gnjfr.mongodb.net/test';
mongoose.connect(mongoDB, { useNewUrlParser: true }).then(() =>{
    console.log('Connection Successful')
}).catch((e) =>{
    console.log('No Connection')
});