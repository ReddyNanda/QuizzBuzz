var student = require('../models/student');
var mongoose=require('mongoose');
var mongoURL =   "mongodb+srv://Nanda:Nanda@123@cluster0.gczxg.mongodb.net/Quizzo?retryWrites=true&w=majority";
mongoose.connect(mongoURL,{useNewUrlParser:true,useUnifiedTopology:true});
var db=mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

uploadstudent=function(candidate){
    
    var stdt_instance= new student(candidate);
    
    stdt_instance.save(function(err){
        if(err)console.log(err);
    });

}
module.exports=uploadstudent;
