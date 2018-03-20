console.log('controllers MITRA\n');

const MitraModel = require('../models/Mitra');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const salt = bcrypt.genSaltSync(10);
require('dotenv').config()

class MitraClass {
  constructor() {

  }

  static findAllMitra(req, res) {
    MitraModel.find()
    .then(dataMitra => {
      res.send(dataMitra)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static createMitra(req, res) {
    // res.send(req.file.cloudStoragePublicUrl)
    // res.send(req.body)

    var hash = bcrypt.hashSync(req.body.password, salt)
    MitraModel.create({
      username: req.body.username,
      password: hash,
      passwordConf: hash,
      alamat: req.body.alamat,
      fullname:req.body.fullname,
      kuasaKTP: req.file.cloudStoragePublicUrl,
      email: req.body.email,
      phone: req.body.phone
    })
    .then(dataMitra => {
      res.send(dataMitra)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static findOneMitra(req, res) {
    MitraModel.findOne({ _id : req.params.id })
    .then(dataMitra => {
      res.send(dataMitra)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updateMitra(req, res) {
    MitraModel.findOneAndUpdate(
      { _id : req.params.id }, {
        $set: {
          username: req.body.username,
          alamat: req.body.alamat,
          fullname: req.body.fullname,
          kuasaKTP: req.file.cloudStoragePublicUrl,
          email: req.body.email,
          phone: req.body.phone,
          updatedAt: new Date()
        }
      },{ new: true })
      .then(dataMitra => {
        res.send(dataMitra)
      })
      .catch(err => {
      res.send(err)
      })
  }

  static addKosanMitra(req, res) {
    MitraModel.findOneAndUpdate(
      { _id: req.params.id }, {
        $addtoset: { listKosan: req.body.kosanId }
      },{ new: true })
      .then(dataMitra => {
        res.send({
          msg : ' Sukses Menambah Kosan !!!',
          data : dataMitra
        })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static deleteMitra(req, res) {
    MitraModel.findOneAndRemove({ _id : req.params.id })
    .then(dataMitra => {
      res.send(dataMitra)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static login(req, res) {
    MitraModel.findOne({
      $or:
        [
          { username: req.body.username },
          { email: req.body.username }
        ]
    })
    .then(dataMitra => {
      if (bcrypt.compareSync(req.body.password, dataMitra.password)) {
        let token = jwt.sign(
          {
            id: dataMitra._id,
            username: dataMitra.username,
            alamat: dataMitra.alamat,
            fullname: dataMitra.fullname,
            kuasaKTP: dataMitra.kuasaKTP,
            email: dataMitra.email,
            phone: dataMitra.phone
          }, process.env.USER_SECRET)
          res.send({ userToken: token, msg: 'Success Login' })
      } else {
        res.send(' Wrong Password ')
      }
    })
    .catch(err => {
      res.send('Username Does Not Exist !')
    })
  }

  static userInfo(req, res) {
    res.send(req.locals)
  }

}

module.exports = MitraClass;
