const express=require('express');
const router=express.Router();
const taskController=require('../controller/taskController');

router.post('/',taskController.createTaskController);
router.get('/',taskController.getAllTaskController);
router.get('/:id',taskController.getTaskByIdController);
router.put('/:id',taskController.updateTaskController);
router.delete('/:id',taskController.deleteTaskController);

module.exports=router;