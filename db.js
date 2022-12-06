const mongoose  = require('mongoose');
//test connection to mongodb
mongoose.connect('mongodb://localhost:27017/EventDB',(err)=>{
    if(!err)
     console.log('Mongodb Connection succeeded.');
     else 
       console.log('Error in DB connection :'+JSON.stringify(err,undefined,2));
});
module.exports = mongoose;