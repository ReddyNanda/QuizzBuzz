var question = require('../models/question');
var mongoose=require('mongoose');
var mongoURL =   "mongodb+srv://Nanda:Nanda@123@cluster0.gczxg.mongodb.net/Quizzo?retryWrites=true&w=majority";
mongoose.connect(mongoURL,{useNewUrlParser:true,useUnifiedTopology:true});
var db=mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

getquestions=function(testId,res){
    
    question.find({"testid":testId},function(err,docs){
        if(err) console.log(err);
        else res.send(docs);


    });



}
module.exports=getquestions;
