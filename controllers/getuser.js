var user = require('../models/user');
var mongoose=require('mongoose');
var mongoURL =   "mongodb+srv://Nanda:Nanda@123@cluster0.gczxg.mongodb.net/Quizzo?retryWrites=true&w=majority";
mongoose.connect(mongoURL,{useNewUrlParser:true,useUnifiedTopology:true});
var db=mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

getuser = function(req,res){
    user.findOne({username:req.body.username,password:req.body.password},function(err,doc){
        if(doc!=null){
            res.redirect("/users/"+req.body.username);
        }else{
            
                res.status(400).render("login",{"message":"Wrong Credentials"});
            
        }
    });
        

};
module.exports=getuser;
