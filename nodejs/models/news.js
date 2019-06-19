var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var news= new Schema({
headline:String,
discription:String,
date:Date,
myImg:String
}
);

module.exports=mongoose.model('news',news);