var express = require('express');
var uploadevaluator= require('../controllers/uploadevaluator');
var uploadstudent= require('../controllers/uploadstudent');
var addattempt= require('../controllers/addattempt');
var uploadquestion= require('../controllers/uploadquestion');
var deletequestion= require('../controllers/deletequestion');
var deletetest= require('../controllers/deletetest');
var getquestions= require('../controllers/getquestions');
var getattempts= require('../controllers/getattempts');



var router = express.Router();


/* GET home page. */

router.get('/',function(req,res){
  
  
  
  res.render("index");


});
router.get('/attempt/start',function(req,res){
  
  var id = req.query.testid;
  getquestions(id,res);
  
  
  

  
  
    
});



router.get('/attempt',function(req,res){
  
  
  res.render("test");
});

router.get('/create',function(req,res){
  
  
  res.render("create");
});

router.post('/create/start',function(req,res){
  
  uploadevaluator(req.body);
  
  res.render('uploadQ');
  
});
router.get('/create/upload',function(req,res){
  console.log()
  uploadquestion(req.query);
  
  res.render("uploadQ");
    
});
router.get('/delete/question',function(req,res){
  console.log(req.query);
  
  deletequestion(req,res);
  
  
    
});
router.get('/delete/test',function(req,res){
  console.log(req.query);
  
  deletetest(req,res);
  
  
    
});
router.get("/attempt/details",function(req,res){
  console.log(req.query)
  addattempt(req,res);
  
});

router.get("/attempts",function(req,res){
  
  getattempts(req,res);
  
});













module.exports = router;
