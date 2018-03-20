console.log('router BARANG KAMAR\n');

const express = require('express');
const router = express.Router();
const BarangKamarControllers = require('../controllers/barangKamar')

router.get('/', BarangKamarControllers.getAll)
router.post('/', BarangKamarControllers.create)
router.get('/:barangKamarId', BarangKamarControllers.singleId)
router.patch(':barangKamarId', BarangKamarControllers.update)
router.delete(':barangKamarId', BarangKamarControllers.delete)

module.exports = router;
