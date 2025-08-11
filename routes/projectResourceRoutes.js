const express=require('express');
const router=express.Router();
const projectResourceController=require('../controller/projectResourceMappingController');

router.post('/',projectResourceController.projectResourceController);
router.get('/',projectResourceController.getAllProjectResourceController);
router.get('/:id',projectResourceController.getProjectResourceByIdController);
router.put('/:id',projectResourceController.updateProjectResourceController);
router.delete('/:id',projectResourceController.deleteProjectResourceController);

module.exports=router;