var evaluator = require('../models/user');
var mongoose=require('mongoose');
var mongoURL =   "mongodb+srv://Nanda:Nanda@123@cluster0.gczxg.mongodb.net/Quizzo?retryWrites=true&w=majority";
mongoose.connect(mongoURL,{useNewUrlParser:true,useUnifiedTopology:true});
var db=mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

uploadevaluator=function(evaluat){
    
    var eval_instance= new evaluator(evaluat);
    
    eval_instance.save(function(err){
        if(err)console.log(err);
    });

}
module.exports=uploadevaluator;
