var evaluator = require('../models/user');
var question = require('../models/question');
var getusertest= require('./getusertest');



var mongoose=require('mongoose');
var mongoURL =   "mongodb+srv://Nanda:Nanda@123@cluster0.gczxg.mongodb.net/Quizzo?retryWrites=true&w=majority";
mongoose.connect(mongoURL,{useNewUrlParser:true,useUnifiedTopology:true});
var db=mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

uploadquestion=function(req,res,qstn){
    

    
            var qstn_instance= new question(qstn);

            
            
           if(qstn_instance.options.includes(qstn_instance.answer)) qstn_instance.save(function(err){
                if(err)console.log(err);
                getusertest(req,res);

            });
           else{
               res.render("uploadQ",{"message":"Options must contain answer"});
           }
        }
        
    
    
    
    
    
    
   



module.exports=uploadquestion;
