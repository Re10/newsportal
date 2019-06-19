//include express,router,news,comments files
var express=require('express');
var router=express.Router();
var news=require('./controllers/newses');
var comments=require('./controllers/comment');

//==use Multer For image upload==//
 var multer=require("multer");

var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './uploads');
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    }
  });
  var upload = multer({ storage : storage}).single('file');

//------ All news Headlines deatil---//
router.get('/news/',news.getAllNews);
//===get specific news in deatile===//
router.get('/news/:id',news.getOneNews);
//===post new News===// 
router.post('/newscreate/', upload, news.Create);
router.put('/news/:id', news.update);
//router.delete('/news/:id',news.delete);
//===get the perticular news comments===//
router.get('/comments/:id',comments.getAllComments);
//===post the comment to comment.js===//
router.post('/comments/',comments.Create);
module.exports=router;