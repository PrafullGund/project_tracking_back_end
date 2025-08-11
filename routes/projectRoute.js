const express = require('express');
const router = express.Router();
const projectController = require('../controller/projectController')

router.post('/', projectController.createProjectController);
router.get('/', projectController.getAllProjectController);
router.get('/:id', projectController.getProjectByIdController);
router.put('/:id', projectController.updateProjectController);
router.delete('/:id', projectController.deleteProjectController);

module.exports = router;