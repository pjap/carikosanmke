console.log('controllers APARTEMENT\n');

const ApartementModel = require('../models/apartement/Apartement');
const redis = require('redis');

class Apartement {
  constructor() {

  }

  static findAllApartement(req, res) {
    ApartementModel.find({}).populate('mitraId', 'username phone email')
    .then(dataApartement => {
      res.send(dataApartement)
    })
    .catch(err => {
      console.log(err);
      res.send(err)
    })
  }

  static createApartement(req, res) {
    ApartementModel.create({
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
      statusKepemilikan: req.body.statusKepemilikan,
      fasilitas: req.body.fasilitas
    })
    .then(dataApartement => {
      res.send(dataKosan)
    })
    .catch(err => {
      console.log(err);
      res.send(err.errors.mitraId.message)
    })
  }

  static findOneApartement(req, res) {
    ApartementModel.findOne({ _id: req.params.id })
    .then(dataApartement => {
      res.send(dataApartement)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updateApartement(req, res) {
    ApartementModel.findOneAndUpdate({ _id: req.params.id }, {
      $set: {
        mitraId: req.body.mitraId,
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
      },
      $addtoset: { fasilitas: req.body.fasilitas }
    }, { new: true })
    .then(dataApartement => {
      res.send(dataApartement)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deleteApartement(req, res) {
    ApartementModel.findOneAndRemove({ _id: req.params.id})
    .then(dataApartement => {
      res.send(dataApartement)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = Apartement;
