const express=require('express')
const app=express();
const tasks=require('./routes/tasks')
const connectDb=require('./db/connect')
require('dotenv').config()
//middleware
app.use(express.static('./public'))
app.use(express.json())
//routes 

app.use('/api/v1/tasks',tasks)
const port=3000
const start=async()=>{
    try{

        await connectDb(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log("the server is live ") 
        })
        
    }catch(error){
console.log(error)
    }
}
start()
// MongoDb123@