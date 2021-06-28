var question = require('../models/question');
var mongoose=require('mongoose');
var mongoURL =   "mongodb+srv://Nanda:Nanda@123@cluster0.gczxg.mongodb.net/Quizzo?retryWrites=true&w=majority";
mongoose.connect(mongoURL,{useNewUrlParser:true,useUnifiedTopology:true});
var db=mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

deletequestion=function(req,res){
    
    question.deleteOne({"_id":req.query.qid},function(err){
        if(err) console.log(err);
        else res.redirect("/users/"+req.query.username+"/"+req.query.testid);


    });



}
module.exports=deletequestion;
