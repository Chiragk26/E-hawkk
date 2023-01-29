const mongoose=require('mongoose')
const {Schema}=mongoose;

const HawkerSchema = new Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true
},
date:{
    type:Date,
    default:Date.now
},
x:{
    type:Number,
    default:0
}
  });

const hawker=mongoose.model('hawker',HawkerSchema)
// hawker.createIndexes();
// mySchena
  module.exports=mongoose.model('hawker',HawkerSchema)