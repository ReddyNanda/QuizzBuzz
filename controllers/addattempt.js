var attempt = require("../models/attempt");
var mongoose=require('mongoose');
var mongoURL =   "mongodb+srv://Nanda:Nanda@123@cluster0.gczxg.mongodb.net/Quizzo?retryWrites=true&w=majority";
mongoose.connect(mongoURL,{useNewUrlParser:true,useUnifiedTopology:true});
var db=mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

addattempt=function(req,res){
    var curattempt = new attempt(req.query);
    curattempt.save(function(err){
        if(err) console.log(err);
        res.send("hii");
    })

}
module.exports=addattempt;