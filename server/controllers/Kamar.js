console.log('controllers KAMAR');

const KamarModel = require('../models/Kamar');
const redis = require('redis');
require('dotenv').config()

class Kamar {
  constructor() {

  }

  static findAll(req, res) {
    KamarModel.find({}).populate({ path: 'kosanId', populate: { path: 'mitraId', select: 'username email phone'} })
    .then(dataKamar => {
      res.send(dataKamar)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static createKamar(req, res) {
    KamarModel.create({
      kosanId: req.body.kosanId,
      name: req.body.name,
      fotoKamar: req.file.cloudStoragePublicUrl,
      luas: req.body.luas,
      price: req.body.price,
      category: req.body.category
    })
    .then(dataKamar => {
      res.send(dataKamar)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static kamarByKosan(req, res) {
    KamarModel.find({ _id: req.params.kosanId })
    .then(dataKamar => {
      res.send(dataKamar)
    })
    .catch(err => {
      res.send(dataKamar)
    })
  }

  static singleKamar(req, res) {
    KamarModel.findOne({ _id: req.params.kamarId })
    .then(dataKamar => {
      res.send(dataKamar)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updateKamar(req, res) {
    KamarModel.findOneAndUpdate({ _id: req.params.kamarId}, {
      $set: {
        name: req.body.name,
        fotoKamar: req.bodu.fotoKamar,
        luas: req.body.luas,
        price: req.body.price,
        description: req.body.description
      },
      $addtoset: { category: req.body.category }
    }, { new: true })
    .then(dataKamar => {
      res.send(dataKamar)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static sewaKamar(req, res) {
    KamarModel.findOneAndUpdate({ _id: req.params.kamarId }, {
      $set: {
        penyewaNama: req.body.penyewaNama,
        penyewaKTP: req.file.cloudStoragePublicUrl,
        checkIn: req.body.checkIn,
        checkout: req.body.checkOut,
        available:false
      }
    }, { new: true })
    .then(dataKamar => {
      res.send({
        msg : 'Isian Data Penyewa Kamar Berhasil',
        result : dataKamar
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

  static kosongKamar(req, res) {
    KamarModel.findOneAndUpdate({ _id: req.params.id}, {
      $set: {
        penyewaNama: null,
        penyewaKTP: null,
        checkIn: null,
        checkOut: null,
        available: true
      }
    }, { new: true })
    .then(dataKamar => {
      res.send({
        msg: 'Kosongan Kamar Berhasil',
        data: dataKamar
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deleteKamar(req, res) {
    KamarModel.findOneAndRemove({ _id: req.params.kamarId })
    .then(dataKamar => {
      res.send(dataKamar)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = Kamar;
