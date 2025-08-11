const userService=require('../service/userService');

const createUserController=async (req,res)=>{
    try{
        const user=req.body;
        const result=await userService.createUser(user);
        res.status(200).json({success:true,message:'User Added Successfully..!', data:user})
    }catch (error){
        res.status(500).json({ success: false, message: error.message });
    }
};

const getAllUserController=async (req,res)=>{
    try{
        const result=await userService.getAllUsersService();
        res.status(200).json({success:true,data:result});
    }catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getUserByIdController=async(req,res)=>{
    try{
        const userId=req.params.id;
        const result=await userService.getUserByIdService(userId);
        if(result.length===0){
            return res.status(404).json({success:false,message:'User Not Found'});
        }
        res.status(200).json({success:true,data:result[0]})
    }catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateUserController=async (req,res)=>{
    try{
        const userId=req.params.id;
        const userData=req.body;
        const result=await userService.updateUserService(userId,userData);
        if(result.affectedRows===0){
            return res.status(404).json({success:false,message:'User Not Found'});
        }
        res.status(200).json({success:true, message:'User Update Successfully..!', data:userData})
    }catch(error){
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteUSerController=async(req,res)=>{
    try{
        const userId=req.params.id;
        const result=await userService.deleteUserService(userId);
        if(result.affectedRows===0){
            return res.status(404).json({success:false, message:'User Not Found'})
        }
        res.status(200).json({success:true, message:'User Deleted Successfully..!'});
    }catch(error){
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports={
    createUserController,
    getAllUserController,
    getUserByIdController,
    updateUserController,
    deleteUSerController
}
