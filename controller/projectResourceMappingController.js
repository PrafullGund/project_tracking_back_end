const projectResourceService=require('../service/projectResourceMappingService');

const projectResourceController=async (req,res)=>{
    try{
        const projectResource=req.body;
        const result=await projectResourceService.createProjectResourceMapping(projectResource)
        res.status(201).json({success:true, message:'Project Resource Mapping Created Successfully..!', data:projectResource});
    }catch(error){
        res.status(500).json({ success: false, message: error.message });
    }
}

const getAllProjectResourceController=async(req,res)=>{
    try{
        const result=await projectResourceService.getAllProjectResourceMapping();
        res.status(200).json({success:true,data:result});
    }catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const getProjectResourceByIdController=async(req,res)=>{
    try{
        const projectResourceId=req.params.id;
        const result=await projectResourceService.getProjectResourceMappingById(projectResourceId);
        if(result.length===0){
            res.status(404).json({success:false, message:'Project Resource Mapping Not Found..!'})
        }
        res.status(200).json({success:true,data:result})
    }catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const updateProjectResourceController=async(req,res)=>{
    try{
        const projectResourceId=req.params.id;
        const projectResourceData=req.body;
        const result=await projectResourceService.updateProjectResourceMapping(projectResourceId,projectResourceData);
        if(result.length===0){
            res.status(404).json({success:false, message:'Project Resource Mapping Not Found..!'});
        }
        res.status(200).json({success:true, message:'Project Resource Mapping Update Successfully..!', data:projectResourceData});
    }catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const deleteProjectResourceController=async(req,res)=>{
    try{
        const projectResourceId=req.params.id;
        const result=await projectResourceService.deleteProjectResourceMapping(projectResourceId);
        if(result.length===0){
            res.status(404).json({success:false, message:'Project Resource Mapping Not Found..!'});
        }
        res.status(200).json({success:true, message:'Project Resource Mapping Delete Successfully..!'})
    }catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports={
    projectResourceController,
    getAllProjectResourceController,
    getProjectResourceByIdController,
    updateProjectResourceController,
    deleteProjectResourceController
}
