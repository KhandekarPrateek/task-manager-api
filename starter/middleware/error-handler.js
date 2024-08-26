const errorHandler=(err,req,res,next)=>{
console.log(err)
    return res.status(err.status).json({mssg:err.message})
}
module.exports=errorHandler
//this is a custom error handler
//takes flow after the next(error) in async wrapper middleware