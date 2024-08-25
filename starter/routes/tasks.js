const express=require('express')
const router=express.Router()
const {getAllTasks,createtask,deleteTask,updateTask,getSingleTask} =require('../controllers/tasks')
router.route('/').get(getAllTasks).post(createtask)

router.route('/:id').get(getSingleTask).delete(deleteTask).patch(updateTask)

module.exports=router 