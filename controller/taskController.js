const taskService=require('../service/taskService');

const createTaskController=async (req,res)=>{
    try{
        const task=req.body;
        const result=await taskService.createTaskService(task);
        res.status(200).json({success:true, message:'Task Created Successfully..!', data:task});
    }catch(error){
        res.status(500).json({ success: false, message: error.message });
    }
}

const getAllTaskController=async(req,res)=>{
    try{
        const result=await taskService.getAllTaskService();
        res.status(200).json({success:true,data:result})
    }catch(error){
        res.status(500).json({ success: false, message: error.message });
    }
}

const getTaskByIdController=async (req,res)=>{
    try{
        const taskId=req.params.id;
        const result=await taskService.getTaskByIdService(taskId);
        if(result.length===0){
            res.status(404).res.json({success:false,message:'Task Not Found'})
        }
        res.status(200).json({success:true,data:result[0]})
    }catch(error){
        res.status(500).json({ success: false, message: error.message });
    }
}

const updateTaskController=async(req,res)=>{
    try{
        const taskId=req.params.id;
        const taskData=req.body;
        const result=await taskService.updateTaskService(taskId,taskData);
        if(result.length===0){
            res.status(404).res.json({success:false,message:'Task Not Found'});
        }
        res.status(200).json({success:true,message:'Task Update Successfully..!',data:taskData});
    }catch(error){
        res.status(500).json({ success: false, message: error.message });
    }
}

const deleteTaskController=async(req,res)=>{
    try{
        const taskId=req.params.id;
        const result=await taskService.deleteTaskService(taskId);
        if(result.length===0){
            res.status(404).res.json({success:false,message:'Task Not Found'})
        }
        res.status(200).json({success:true, message:'Task Deleted Successfully..!'})
    }catch(error){
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports={
    createTaskController,
    getAllTaskController,
    getTaskByIdController,
    updateTaskController,
    deleteTaskController
}

