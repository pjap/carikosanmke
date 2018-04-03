console.log('Routes APARTEMENT\n');

const express = require('express');
const router = express.Router();

// const jwt = require('../helpers/jwt')
const ApartementControllers = require('../controllers/apartement/Apartement')

// upload image
const imagesMulter = require('../helpers/multer-images')
// const upload = imagesMulter.multer.fields([{name:'fotoKosan', maxCount:1},{name:'pengurusKTP', maxCount:1}])
const upload = imagesMulter.multer.single('pengurusKTP')
const GCPupload = imagesMulter.sendUploadToGCS

router.get('/', ApartementControllers.findAllKosan)
// router.get('/', jwt.isLogin, jwt.isAdmin, MitraCtrl.findKosan)
router.post('/', upload, GCPupload, ApartementControllers.createKosan) //register
router.get('/:id', ApartementControllers.findOneKosan)
router.patch('/:id', ApartementControllers.updateKosan)
router.delete('/:id', ApartementControllers.deleteKosan)

module.exports = router;
