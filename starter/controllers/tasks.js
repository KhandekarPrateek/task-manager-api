 const Task=require('../models/Task')

const getAllTasks=async(req,res)=>{
    try {
        //finnds all the document for task collection
        const Tasks=await Task.find({})
        res.status(200).json({tasks:Tasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const createtask=async(req,res)=>{
    
    try{
        //here this creates a new instance of task ie document in db for task collection with data that client gave in req.body
    const task=await Task.create(req.body)
    //here it means that task object is sent as a json back to client 

    res.status(201).json({task})

    }catch(error){
        //error mssg given in models will be shown here 
        res.status(500).json({msg:error})
    }
}
const deleteTask=async(req,res)=>{
    try {
        const {id:taskID}=req.params
        const task=await Task.findOneAndDelete({_id:taskID})
      if(!task){
        return res.status(404).json({msg:"no taskwith this id"})
      }
        res.status(200).send()
      
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
}
const getSingleTask=async(req,res)=>{
    try {
        const {id:taskID}=req.params//giving alias to the id as taksId
        const task=await Task.findOne({_id:taskID})//_id is in our db 
        if(!task){
            return res.status(404).json({msg:"no taskwith this id"})
        }
        res.status(200).json({singleTask:task})
        
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
}
const updateTask=async(req,res)=>{
   try {
    const {id:taskID}=req.params
    //send cond to check(_id) and send the changed value(req.body) and the third paramter is called the options object 
    const task=await Task.findOneAndUpdate({_id:taskID},req.body,{
        new:true,runValidators:true
    })
    if(!task){
        return res.status(404).json({msg:"no taskwith this id"})
    }
        res.status(200).json({task})
   } catch (error) {
    res.status(500).json({msg:error})
    
   }
}
module.exports={
    getAllTasks,createtask,deleteTask,updateTask,getSingleTask
}