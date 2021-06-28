var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var questionschema = new  Schema({


    
    testid:{type:String,required:true},
    title:{type:String,required:true},
    
    options:{type:String},
    answer:{type:String,required:true}
    


});




module.exports=mongoose.model("question",questionschema);

