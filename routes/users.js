var express = require('express');

var uploadstudent= require('../controllers/uploadstudent');
var uploadquestion= require('../controllers/uploadquestion');
var getquestions= require('../controllers/getquestions');
var adduser = require('../controllers/adduser');
var getuser= require('../controllers/getuser');
var getusertest= require('../controllers/getusertest');
var addtest= require('../controllers/addtest');
var gettests= require('../controllers/gettests');
var router= express.Router();


router.get("/login",function(req,res){
   
    
    res.render("login");

});
router.get("/register",function(req,res){
   

    
    res.render("signup");

});
router.post('/login',function(req,res){
   getuser(req,res);
});
router.post('/register',function(req,res){
    adduser(req,res);
 });
router.get('/:username',function(req,res){
    
    gettests(req.params.username,res);
    
    

});



router.get('/:username/newtest',function(req,res){
    res.render("create");
});
router.post('/:username/newtest',function(req,res){
    addtest(req,res);
});
router.get("/:username/:testid",function(req,res){
    console.log(req.params);
    getusertest(req,res);
});
router.get("/:username/:testid/addq",function(req,res){
    
    res.render("uploadQ",{"user":req.params.username,"testid":req.params.testid});
});
router.post("/:username/:testid",function(req,res){
    var question = req.body;
    question.testid= req.params.testid;
    console.log(question);
    uploadquestion(req,res,question);
    
    
});



module.exports=router;


