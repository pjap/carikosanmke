console.log('ROUTER MAINTENANCE KOSAN\n')

const express = require('express')
const MaintenanceKosanControllers = require('../controllers/MaintenanceKosan')
const router = express.Router()

router.get('/', MaintenanceKosanControllers.getAll)
router.post('/', MaintenanceKosanControllers.create)
router.get('/:maintenanceKosanId', MaintenanceKosanControllers.singleId)
router.patch('/:maintenanceKosanId', MaintenanceKosanControllers.update)
router.delete('/:maintenanceKosanId', MaintenanceKosanControllers.delete)

module.exports = router
