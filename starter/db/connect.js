const mongoose = require('mongoose');




const connectDb=(url)=>{
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true,useFindAndModify:true })
console.log("db")
}


module.exports=connectDb

  
