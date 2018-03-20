console.log('models KOSAN\n');

const KosanModel = require('../models/Kosan');
const redis = require('redis');

class Kosan {
  constructor() {

  }

  static findAllKosan(req, res) {
    KosanModel.find({}).populate('mitraId', 'username phone email')
    .then(dataKosan => {
      res.send(dataKosan)
    })
    .catch(err => {
      console.log(err);
      res.send(err)
    })
  }

  static createKosan(req, res) {
    KosanModel.create({
      mitraId: req.body.mitraId,
      name: req.body.name,
      // fotoKosan: req.file.cloudStoragePublicUrl,
      fullAddress: req.body.fullAddress,
      RT: req.body.RT,
      RW: req.body.RW,
      kelurahan: req.body.kelurahan,
      kecamatan: req.body.kecamatan,
      kotaDesa: req.body.kotaDesa,
      provinsi: req.body.provinsi,
      kodepos: req.body.kodepos,
      pengurusNama: req.body.pengurusNama,
      pengurusEmail: req.body.pengurusEmail,
      pengurusKTP: req.file.cloudStoragePublicUrl,
      statusKepemilikan: req.body.statusKepemilikan
    })
    .then(dataKosan => {
      res.send(dataKosan)
    })
    .catch(err => {
      console.log(err);
      res.send(err.errors.mitraId.message)
    })
  }

  static findOneKosan(req, res) {
    KosanModel.findOne({ _id: req.params.id })
    .then(dataKosan => {
      res.send(dataKosan)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updateKosan(req, res) {
    KosanModel.findOneAndUpdate({ _id: req.params.id}, {
      $set: {
        mitraObjectId: req.body.mitraId,
        name: req.body.name,
        fullAddress: req.body.fullAddress,
        kelurahan: req.body.kelurahan,
        kecamatan: req.body.kecamatan,
        kotaDesa: req.body.kotaDesa,
        provinsi: req.body.provinsi,
        kodepos: req.body.kodepos,
        pengurusNama: req.body.pengurusNama,
        pengurusEmail: req.body.pengurusEmail,
        pengurusKTP: req.file.cloudStoragePublicUrl,
        statusKepemilikan: req.body.statusKepemilikan
      }
    }, { new: true })
    .then(dataKosan => {
      res.send({
        msg: ' Update Success !',
        data: dataKosan
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

  static tambahKamarKosan(req, res) {
    KosanModel.findOneAndUpdate({ _id: req.params.id}, { $addtoset: { kamarList: req.body.kamarId}},
    { new: true })
    .then(dataKosan => {
      res.send({
        msg: ' Sukses Menambah Data Kamar',
        data: dataKosan
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deleteKosan(req, res) {
    KosanModel.findOneAndRemove({ _id: req.params.id })
    .then(dataKosan => {
      res.send(dataKosan)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = Kosan;
