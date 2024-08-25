const mongoose=require('mongoose')

const TaskSchema=new mongoose.Schema({
    //name:String, not used like this as can send empty string to our db so we need to validate
    name:{
        type:String,
        required:[true,"name needed"],
        trim:true,//removes whitespaces
        maxlength:[20,"name cant be more than 20 chars"],
    },
    completed:{
        type:Boolean,
        default:false,
    },
    //only these key values will be passed to our db for proprer structure to our db
})
//needs name and name of Schema
module.exports=mongoose.model('Task',TaskSchema)