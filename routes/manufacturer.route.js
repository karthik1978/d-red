const express = require('express'); 
const router = express.Router();
var manufacturerController = require('../controllers/manufacturer.controller');

// Send Manufacturer Create Page response
router.post('/', manufacturerController.manufacturer_create);
router.get('/:id', manufacturerController.manufacturer_read);
router.put('/:id', manufacturerController.manufacturer_update);
router.delete('/:id', manufacturerController.manufacturer_delete);
router.get('/', manufacturerController.manufacturer_list);

module.exports = router;
