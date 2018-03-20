console.log('router PENYEWA\n');

const express = require('express');
const router = express.Router();
const PenyewaControllers = require('../controllers/Penyewa')

router.get('/', PenyewaControllers.getAll)
router.post('/', PenyewaControllers.create)
router.get('/:penyewaId', PenyewaControllers.singleId)
router.patch(':penyewaId', PenyewaControllers.update)
router.delete(':penyewaId', PenyewaControllers.delete)

module.exports = router;
