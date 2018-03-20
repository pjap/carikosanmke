console.log('router BARANG KOSAN\n');

const express = require('express');
const router = express.Router();
const BarangKosanControllers = require('../controllers/BarangKosan')

router.get('/', BarangKosanControllers.getAll)
router.post('/', BarangKosanControllers.create)
router.get('/:barangKosanId', BarangKosanControllers.singleId)
router.patch(':barangKosanId', BarangKosanControllers.update)
router.delete(':barangKosanId', BarangKosanControllers.delete)

module.exports = router;
