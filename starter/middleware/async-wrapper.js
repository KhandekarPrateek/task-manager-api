const asyncWrapper=(func)=>{
    return async(req,res,next)=>{
        try{
         await   func(req,res,next)
        }catch(error){
            next(error)//passes error to next middleware and if no hadler from our side express's default hadler handles it
        }
    }
}
module.exports=asyncWrapper

//basically the async wrapper middleware takes all controllers function as an argument and we don have to do try catch on all 
