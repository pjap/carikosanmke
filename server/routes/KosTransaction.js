console.log('router KOS TRANSACTION')

const express = require('express')
const router = express.Router()
const kosTransactionControllers = require('../controllers/kosTransaction')


router.get('/', kosTransactionControllers.getAll)
router.post('/', kosTransactionControllers.create)
router.get('/:kosTransactionId', kosTransactionControllers.singleId)
router.patch('/:kosTransactionId', kosTransactionControllers.update)
router.get('/:kosTransactionId', kosTransactionControllers.delete)


module.exports = router
