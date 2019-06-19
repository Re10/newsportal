//--include the news model here as well as file system and path to rename fiel--//
var newsModel=require('../models/news');
var fs=require("fs");
var path=require("path");
var news={
    getAllNews:function(req,res){
        newsModel.find(function(err,doc){
            if(err){
                res.status(200).json({status:'error',message:'Database error:'+err,doc:''});
            }
            else{

                res.status(200).json({status:'success', message:'success',doc:doc});
            }
        });
    },
    //--for getting only one news at a time--//
    getOneNews:function(req,res){
        newsModel.findById(req.params.id,function(err,doc){
          if(err){
              res.status(200).json({status:'error',message:'id error in database'+err,doc:''});
          }
          else{
              res.status(200).json({status:'success',message:'success',doc:doc});
          }
        });
    },
    Create:function(req,res){
    console.log('Request File:',req.file);
    console.log('Request body:',req.body);
   //===req for new data===//
   
    var newse=new newsModel();
    newse.headline=req.body.headline;
    newse.discription=req.body.discription;
    newse.date=new Date();
    if(req.file !== undefined)
    {
    newse.myImg=req.file.filename;
    }
    else
    {
        newse.myImg="";
        console.log("within else bock image is undefine");
    }

//--after creatation news should be save in database--//
    newse.save(function(err,doc){
        if(err)
        {
            res.status(200).json({status: 'error', message: 'Datebase Error:' + err, doc: ''});
        }

        else
        {
            //--here check that file type is not undefined--//
            if(req.file!==undefined){
            //--Rname the image--//
            var oldImg=doc.myImg;
            var newImg=oldImg+doc._id;
            console.log("new img---------",newImg);
            doc.myImg=newImg;
            //save in database
            doc.save();
            //Rename the image name in upload folder//
            fs.rename(path.join(__dirname,"../uploads/"+oldImg),path.join(__dirname,"../uploads/"+newImg),(err)=>{
                console.log('Rename Error:',err);
            });
        }
        else{
            console.log("Image is undefined so just data should be inserted");
            
        }
                      
            res.status(200).json({status: 'success', message: 'Document added Successfully.', doc: doc});
         }   
    });
     },
    update:function(req,res){
        newsModel.findById(req.params.id,function(err,doc){
            if(err){
                res.status(200).json({status: 'error', message: 'Database Error:' + err, doc: ''});
            }
           
           doc.headline=req.body.headline;
           doc.date=req.body.date;
           doc.discription=req.body.discription;
           doc.image=req.file.path;
           doc.save(function(err,doc){
            if(err){
                res.status(200).json({status: 'error', message: 'Database Error:' + err, doc: ''});
            }
            else{
                res.status(200).json({status: 'success', message: 'Document updated Successfully.', doc: ''});
            }
           });
        
        });

    }
    /*,
    delete:function(req,res){
       newsModel.deleteOne({_id:req.params.id},function(err,doc){
        if(err){
            res.status(200).json({status: 'error', message: 'Database Error:' + err, doc: ''});
        } 
        else{
            res.status(200).json({status: 'success', message: 'Document deleted Successfully.', doc: ''});
        } 

       }) ;
    }*/
}
//----exporting news------//
module.exports=news;
