//==include the comment model here==//
var commentModel=require('../models/comment');
var comments={
    getAllComments:function(req,res){
        //---for perticular news id get data---//
        commentModel.find({'newsid':req.params.id},function(err,doc){
           console.log("ID--------------:",req.params.id);
            
            if(err){
                res.status(200).json({status:'error',message:'Database error:'+err,doc:''});
            }
            else{
                res.status(200).json({status:'success', message:'success',doc:doc});
            }
        });
},
  Create:function(req,res){
        console.log('Request APIS:',req);
        var commentes=new commentModel();
        commentes.newsid=req.body.newsid;
        commentes.comments=req.body.comments;
        commentes.userName=req.body.userName;
        commentes.email=req.body.email;
        commentes.save(function(err,doc){
        if(err){
            res.status(200).json({status: 'error', message: 'Datebase Error:' + err, doc: ''});
        }
        else{
            res.status(200).json({status: 'success', message: 'Document added Successfully.', doc: doc});
         }
    });
     }
}

module.exports=comments;