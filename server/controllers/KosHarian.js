console.log('controllers KOS HARIAN\n');

const KosHarianModel = require('../models/KosHarian')

class KosHarian {
  constructor() {

  }

  static getAll(req, res) {
    KosHarianModel.find({})
    .then(dataKosHarian => {
      res.send(dataKosHarian)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static create(req, res) {
    KosHarianModel.create(req.body)
    .then(dataKosHarian => {
      res.send(dataKosHarian)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static singleId(req, res) {
    KosHarianModel.findOne({ _id: req.params.kosHarianId })
    .then(dataKosHarian => {
      res.send(dataKosHarian)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static update(req, res) {
    KosHarianModel.findOneAndUpdate({ _id: req.params.kosHarianId }, req.body,
    { new: true })
    .then(dataKosHarian => {
      res.send(dataKosHarian)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static delete(req, res) {
    KosHarianModel.findOneAndRemove({ _id: req.params.kosHarianId })
    .then(dataKosHarian => {
      res.send(dataKosHarian)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = KosHarian;
