console.log('ROUTER MAINTENANCE KOSAN\n')

const express = require('express')
const MaintenanceKamarControllers = require('../controllers/MaintenanceKamar')
const router = express.Router()

router.get('/', MaintenanceKamarControllers.getAll)
router.post('/', MaintenanceKamarControllers.create)
router.get('/:maintenanceKamarId', MaintenanceKamarControllers.singleId)
router.patch('/:maintenanceKamarId', MaintenanceKamarControllers.update)
router.delete('/:maintenanceKamarId', MaintenanceKamarControllers.delete)

module.exports = router
