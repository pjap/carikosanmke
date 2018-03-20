console.log('router PENGURUS\n');

const express = require('express');
const router = express.Router();
const PengurusControllers = require('../controllers/Pengurus')

router.get('/', PengurusControllers.getAll)
router.post('/', PengurusControllers.create)
router.get('/:pengurusId', PengurusControllers.singleId)
router.patch(':pengurusId', PengurusControllers.update)
router.delete(':pengurusId', PengurusControllers.delete)

module.exports = router;
