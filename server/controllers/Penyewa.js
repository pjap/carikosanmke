console.log('controllers PENYEWA\n');

const PenyewaModel = require('../models/Penyewa')

class Penyewa {
  constructor() {

  }

  static getAll(req, res) {
    PenyewaModel.find({})
    .then(dataPenyewa => {
      res.send(dataPenyewa)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static create(req, res) {
    PenyewaModel.create(req.body)
    .then(dataPenyewa => {
      res.send(dataPenyewa)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static singleId(req, res) {
    PenyewaModel.findById({ _id: req.params.penyewaId })
    .then(dataPenyewa => {
      res.send(dataPenyewa)
    })
    .catch(err => {
      res.send(dataPenyewa)
    })
  }

  static update(req, res) {
    PenyewaModel.findOneAndUpdate({ _id: req.params.penyewaId}, req.body,
    { new: true })
    .then(dataPenyewa => {
      res.send(dataPenyewa)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static delete(req, res) {
    PenyewaModel.findOneAndRemove({ _id: req.params.penyewaId })
    .then(dataPenyewa => {
      res.send(dataPenyewa)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = Penyewa;
