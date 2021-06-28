
var test = require('./models/test');
var mongoose=require('mongoose');
var mongoURL =   "mongodb+srv://Nanda:Nanda@123@cluster0.gczxg.mongodb.net/Quizzo?retryWrites=true&w=majority";
mongoose.connect(mongoURL,{useNewUrlParser:true,useUnifiedTopology:true});
var db=mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

test_instance= new test({
    username:"Nanda5120",
    testid:"789456",
    testname:"lorem ipsum dolor",
    description:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
});
test_instance.save(function(err){
    if(err) console.log(error);
    

});