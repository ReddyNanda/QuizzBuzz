var user = require('../models/user');
var mongoose=require('mongoose');
var mongoURL =   "mongodb+srv://Nanda:Nanda@123@cluster0.gczxg.mongodb.net/Quizzo?retryWrites=true&w=majority";
mongoose.connect(mongoURL,{useNewUrlParser:true,useUnifiedTopology:true});
var db=mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

adduser=function(req,res){
    
    var user_instance= new user(req.body);
    
    user.find({username:req.body.username},function(err,docs){
        if(docs.length!=0){
            console.log(docs);
            return res.render("signup",{"message":"user already exists"});
        }else{
            user_instance.save(function(err){
                if(err)console.log(err);
                res.redirect("/users/"+req.body.username);
            });
        }
    });
        
    
    
    
    

}
module.exports=adduser;