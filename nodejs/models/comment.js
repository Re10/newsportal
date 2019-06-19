var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var comment= new Schema({
newsid:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'news'
      },
comments:String,
userName:String,
email:String,
    }
);

module.exports=mongoose.model('comment',comment);