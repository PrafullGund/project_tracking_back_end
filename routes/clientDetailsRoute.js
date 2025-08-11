const express = require('express');
const router = express.Router();
const clientDetailsController = require('../controller/clientDetailsController');

router.post('/', clientDetailsController.createClientController);
router.get('/', clientDetailsController.getAllClientController);
router.get('/:id', clientDetailsController.getClientByIdController);
router.put('/:id', clientDetailsController.updateClientController);
router.delete('/:id', clientDetailsController.deleteClientController);

module.exports = router;