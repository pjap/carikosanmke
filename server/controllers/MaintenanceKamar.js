console.log('controllers MAINTENANCE KAMAR\n');

const MaintenanceKamarModel = require('../models/MaintenanceKamar')

class MaintenanceKamar {
  constructor() {

  }

  static getAll(req, res) {
    MaintenanceKamarModel.find({})
    .then(dataMaintenanceKamar => {
      res.send(dataMaintenanceKamar)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static create(req, res) {
    MaintenanceKamarModel.create(req.body)
    .then(dataMaintenanceKamar => {
      res.send(dataMaintenanceKamar)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static singleId(req, res) {
    MaintenanceKamarModel.findOne({ _id: req.params.maintenanceKamarId })
    .then(dataMaintenanceKamar => {
      res.send(dataMaintenanceKamar)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static update(req, res) {
    MaintenanceKamarModel.findOneAndUpdate({ _id: req.params.maintenanceKamarId }, req.body,
    { new: true })
    .then(dataMaintenanceKamar => {
      res.send(dataMaintenanceKamar)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static delete(req, res) {
    MaintenanceKamarModel.findOneAndRemove({ _id: req.params.maintenanceKamarId })
    .then(dataMaintenanceKamar => {
      res.send(dataMaintenanceKamar)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = MaintenanceKamar;
