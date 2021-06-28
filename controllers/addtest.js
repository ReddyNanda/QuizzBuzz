var test = require('../models/test');
var mongoose=require('mongoose');
var mongoURL =   "mongodb+srv://Nanda:Nanda@123@cluster0.gczxg.mongodb.net/Quizzo?retryWrites=true&w=majority";
mongoose.connect(mongoURL,{useNewUrlParser:true,useUnifiedTopology:true});
var db=mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

addtest=function(req,res){
    req.body.username= req.params.username;
    test_instance= new test(req.body);
    test.find({testid:req.body.testid},function(err,docs){
        if(docs.length!=0){
            console.log(docs);
            return res.render("create",{"message":"testid already exists"});;
        }else{
    test_instance.save(function(err){
        if(err) console.log(err);
        res.redirect("/users/"+req.params.username+"/"+req.body.testid);

    });
}
    
    



});
}
module.exports=addtest;