var test = require('../models/test');
var mongoose=require('mongoose');
var mongoURL =   "mongodb+srv://Nanda:Nanda@123@cluster0.gczxg.mongodb.net/Quizzo?retryWrites=true&w=majority";
mongoose.connect(mongoURL,{useNewUrlParser:true,useUnifiedTopology:true});
var db=mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

gettests=function(username,res){
    
    test.find({"username":username},function(err,docs){
        if(err) console.log(err);
        else {
            console.log(docs);
            res.render("usertests",{"user":username,"tests":docs});
        }

    });



}
module.exports=gettests;