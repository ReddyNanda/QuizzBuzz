var test = require('../models/test');
var question = require('../models/question');
var mongoose=require('mongoose');
var mongoURL =   "mongodb+srv://Nanda:Nanda@123@cluster0.gczxg.mongodb.net/Quizzo?retryWrites=true&w=majority";
mongoose.connect(mongoURL,{useNewUrlParser:true,useUnifiedTopology:true});
var db=mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

deletetest=function(req,res){
    
    question.deleteMany({"testid":req.query.testid},function(err){
        if(err) console.log(err);
        else {
            test.deleteOne({"testid":req.query.testid},function(err){
            res.redirect("/users/"+req.query.username)
        });

        }

    });



}
module.exports=deletetest;