const express = require('express');
const contactController = require('../controller/contactController');

const router = express.Router();

router.get('/contacts', contactController.getContacts);
router.get('/contact/:id', contactController.getContact);
router.post('/contact', contactController.postContact);
router.put('/contact/:id', contactController.updateContact);
router.delete('/contact/:id', contactController.deleteContact);

module.exports = router;