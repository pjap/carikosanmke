console.log('controllers MAINTENANCE KOSAN\n');

const MaintenanceKosanModel = require('../models/MaintenanceKosan')

class MaintenanceKosan {
  constructor() {

  }

  static getAll(req, res) {
    MaintenanceKosanModel.find({})
    .then(dataMaintenanceKosan => {
      res.send(dataMaintenanceKosan)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static create(req, res) {
    MaintenanceKosanModel.create(req.body)
    .then(dataMaintenanceKosan => {
      res.send(dataMaintenanceKosan)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static singleId(req, res) {
    MaintenanceKosanModel.findOne({ _id: req.params.maintenanceKosanId })
    .then(dataMaintenanceKosan => {
      res.send(dataMaintenanceKosan)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static update(req, res) {
    MaintenanceKosanModel.findOneAndUpdate({ _id: req.params.maintenanceKosanId }, req.body,
    { new: true })
    .then(dataMaintenanceKosan => {
      res.send(dataMaintenanceKosan)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static delete(req, res) {
    MaintenanceKosanModel.findOneAndRemove({ _id: req.params.maintenanceKosanId })
    .then(dataMaintenanceKosan => {
      res.send(dataMaintenanceKosan)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = MaintenanceKosan;
