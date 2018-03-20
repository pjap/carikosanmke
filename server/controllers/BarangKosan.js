console.log('controllers BARANG KOSAN\n');

const BarangKosanModel = require('../models/BarangKosan');

class BarangKosan {
  constructor() {

  }

  static getAll(req, res) {
    BarangKosanModel.find({})
    .then(dataBarangKosan => {
      res.send(dataBarangKosan)
    })
    .catch(err => {
      res.send(dataBarangKosan)
    })
  }

  static create(req, res) {
    BarangKosanModel.create(req.body)
    .then(dataBarangKosan => {
      res.send(dataBarangKosan)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static singleId(req, res) {
    BarangKosanModel.findById({ _id: req.params.barangKosanId })
    .then(dataBarangKosan => {
      res.send(dataBarangKosan)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static update(req, res) {
    BarangKosanModel.findOneAndUpdate({ _id: req.params.barangKosanId }, req.body,
    { new: true })
    .then(dataBarangKosan => {
      res.send(dataBarangKosan)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static delete(req, res) {
    BarangKosanModel.findOneAndRemove({ _id: req.params.barangKosanId })
    .then(dataBarangKosan => {
      res.send(dataBarangKosan)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = BarangKosan;
