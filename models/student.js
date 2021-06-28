var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var studentschema = new Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    rollno:{type:String},
    email:{type:String,required:true},
    
    testid:{type:String,required:true}
});

module.exports=mongoose.model('student',studentschema);
