var attempt = require("../models/attempt");
var mongoose=require('mongoose');
var mongoURL =   "mongodb+srv://Nanda:Nanda@123@cluster0.gczxg.mongodb.net/Quizzo?retryWrites=true&w=majority";
mongoose.connect(mongoURL,{useNewUrlParser:true,useUnifiedTopology:true});
var db=mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

getattempts=function(req,res){
    console.log(req.query.testid)
    attempt.find({"testid":req.query.testid},function(err,docs){
        if(err) console.log(err);
        res.render("attempts",{"attempts":docs});
    });
}
module.exports=getattempts;