console.log('router MITRA\n');

const express = require('express');
const router = express.Router();
const jwt = require('../helpers/jwt');
const MitraControllers = require('../controllers/Mitra')

// upload image
const imagesMulter = require('../helpers/multer-images')
const upload = imagesMulter.multer.single('kuasaKTP')
const GCPupload = imagesMulter.sendUploadToGCS

router.post('/login', MitraControllers.login)
router.get('/info', jwt.isLogin, MitraControllers.userInfo)

router.get('/', MitraControllers.findAllMitra)
// router.get('/', jwt.isLogin, jwt.isAdmin, MitraControllers.findAllMitra)
router.post('/', upload, GCPupload, MitraControllers.createMitra)
router.get('/:id', MitraControllers.findOneMitra)
router.put('/id', upload, GCPupload, MitraControllers.updateMitra)
router.patch('/addkosan/:id', MitraControllers.addKosanMitra)
router.delete('/:id', MitraControllers.deleteMitra)

module.exports = router;
