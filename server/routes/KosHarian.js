console.log('router KOS HARIAN\n');

const express = require('express');
const router = express.Router();
const KosHarianControllers = require('../controllers/KosHarian')

router.get('/', KosHarianControllers.getAll)
router.post('/', KosHarianControllers.create)
router.get('/:kosHarianId', KosHarianControllers.singleId)
router.patch(':kosHarianId', KosHarianControllers.update)
router.delete(':kosHarianId', KosHarianControllers.delete)

module.exports = router;
