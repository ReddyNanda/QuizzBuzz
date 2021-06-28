var mongoose= require("mongoose");
var Schema = mongoose.Schema;

var attemptschema = new Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    rollno:{type:String},
    email:{type:String,required:true},
    date:{type:String,required:true},
    testid:{type:String,required:true},
    score:{type:String,required:true}
    

    
});

module.exports=mongoose.model('attempt',attemptschema);

