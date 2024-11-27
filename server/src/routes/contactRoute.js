const express = require('express');
const contactController = require('../controller/contactController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/contacts',authMiddleware,contactController.getContacts);
router.get('/contact/:id',authMiddleware,contactController.getContact);
router.post('/contact',authMiddleware,contactController.postContact);
router.put('/contact/:id',authMiddleware,contactController.updateContact);
router.delete('/contact/:id',authMiddleware,contactController.deleteContact);

module.exports = router;