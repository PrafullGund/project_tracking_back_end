const express=require('express');
const router=express.Router();
const projectDocumentController=require('../controller/projectDocumentController')

router.post('/upload',projectDocumentController.uploadDocument);
router.get('/',projectDocumentController.getAllDocumentController);
router.get('/:id',projectDocumentController.getDocumentByIdController);
router.put('/:id',projectDocumentController.updateDocumentController);
router.delete('/:id',projectDocumentController.deleteDocumentController);
router.get('/view/:id',projectDocumentController.viewDocumentController);

module.exports=router;