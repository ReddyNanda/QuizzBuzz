var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var testschema = new Schema({
    testid:{type:String,required:true},
    testname:{type:String,required:true},
    
    
    description:{type:String,required:true},
    username:{type:String,required:true}
    
});

module.exports=mongoose.model('test',testschema);
