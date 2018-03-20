console.log('router KAMAR');

const express = require('express');
const router = express.Router();
const KamarControllers = require('../controllers/Kamar');
const jwt = require('../helpers/jwt');

//upload image
const imagesMulter = require('../helpers/multer-images')
const upload = imagesMulter.multer.single('picture')
const GCPupload = imagesMulter.sendUploadToGCS

router.get('/', KamarControllers.findAll)
router.post('/', upload, GCPupload, KamarControllers.createKamar)
router.get('/', KamarControllers.singleKamar)
router.patch('/:kamarId', upload, GCPupload, KamarControllers.updateKamar)
// router.patch('/:kamarId', upload, GCPupload, KamarControllers.sewaKamar)
// router.get('/:kosanId', KamarControllers.kamarByKosan) //get kamar by Kosan
router.delete('/:kamarId', KamarControllers.findAll)

module.exports = router;
