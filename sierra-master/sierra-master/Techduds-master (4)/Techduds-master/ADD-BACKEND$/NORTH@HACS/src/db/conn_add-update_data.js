const { MongoClient } = require('mongodb');

var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/ADD_DATA_UPDATE_DATA_HACS_NORTH_2022';
mongoose.connect(mongoDB, { useNewUrlParser: true }).then(() =>{
    console.log('Connection Successful')
}).catch((e) =>{
    console.log('No Connection')
});


