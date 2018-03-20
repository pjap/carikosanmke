console.log('controllers PENGURUS\n');

const PengurusModel = require('../models/Pengurus');

class Pengurus {
  constructor() {

  }

  static getAll(req, res) {
    PengurusModel.find({})
    .then(dataPengurus => {
      res.send(dataPengurus)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static create(req, res) {
    PengurusModel.create(req.body)
    .then(dataPengurus => {
      res.send(dataPengurus)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static singleId(req, res) {
    PengurusModel.findById({ _id: req.params.pengurusId })
    .then(dataPengurus => {
      res.send(dataPengurus)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static update(req, res) {
    PengurusModel.findOneAndUpdate({ _id: req.params.pengurusId }, req.body,
    { new: true })
    .then(dataPengurus => {
      res.send(dataPengurus)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static delete(req, res) {
    PengurusModel.findOneAndRemove({ _id: req.params.pengurusId})
    .then(dataPengurus => {
      res.send(dataPengurus)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = Pengurus;
