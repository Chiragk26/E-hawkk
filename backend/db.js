const mongoose=require('mongoose')
// const mongoURI="mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
const mongoURI='mongodb://localhost:27017/e-hawk'



const connectToMongo=()=>{

    mongoose.connect (mongoURI,()=>{
       console.log("Connected to Mongo successfully")
   })
}




module.exports=connectToMongo