console.log('controllers BARANG KAMAR\n');

const BarangKamarModel = require('../models/BarangKamar');

class BarangKamar {
  constructor() {

  }

  static getAll(req, res) {
    BarangKamarModel.find({})
    .then(dataBarangKamar => {
      res.send(dataBarangKamar)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static create(req, res) {
    BarangKamarModel.create(req.body)
    .then(dataBarangKamar => {
      res.send(dataBarangKamar)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static singleId(req, res) {
    BarangKamarModel.findOne({ _id: req.params.barangKamarId })
    .then(dataBarangKamar => {
      res.send(dataBarangKamar)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static update(req, res) {
    BarangKamarModel.findOneAndUpdate({ _id: req.params.barangKamarId}, req.body,
    { new: true })
    .then(dataBarangKamar => {
      res.send(dataBarangKamar)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static delete(req, res) {
    BarangKamarModel.findOneAndRemove({ _id: req.params.barangKamarId })
    .then(dataBarangKamar => {
      res.send(dataBarangKamar)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = BarangKamar;
