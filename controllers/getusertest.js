
var question = require('../models/question');
var mongoose=require('mongoose');
var mongoURL =   "mongodb+srv://Nanda:Nanda@123@cluster0.gczxg.mongodb.net/Quizzo?retryWrites=true&w=majority";
mongoose.connect(mongoURL,{useNewUrlParser:true,useUnifiedTopology:true});
var db=mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

getusertest=function(req,res){
    
    question.find({"testid":req.params.testid},function(err,docs){
        if(err) console.log(err);
        else res.render("usertest",{"questions":docs,"user":req.params.username,"testid":req.params.testid});


    });



}
module.exports=getusertest;