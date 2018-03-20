console.log('model KOSAN\n')

const express = require('express');
const router = express.Router();
// const jwt = require('../helpers/jwt')
const KosanControllers = require('../controllers/Kosan')

// upload image
const imagesMulter = require('../helpers/multer-images')
// const upload = imagesMulter.multer.fields([{name:'fotoKosan', maxCount:1},{name:'pengurusKTP', maxCount:1}])
const upload = imagesMulter.multer.single('pengurusKTP')
const GCPupload = imagesMulter.sendUploadToGCS

router.get('/', KosanControllers.findAllKosan)
// router.get('/', jwt.isLogin, jwt.isAdmin, MitraCtrl.findKosan)
router.post('/', upload, GCPupload, KosanControllers.createKosan) //register
router.get('/:id', KosanControllers.findOneKosan)
router.patch('/:id', KosanControllers.updateKosan)
router.patch('/addroom/:id', KosanControllers.tambahKamarKosan)
router.delete('/:id', KosanControllers.deleteKosan)


module.exports = router
