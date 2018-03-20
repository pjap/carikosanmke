console.log('controllers KOS TRANSACTION\n');

const KosTransactionModel = require('../models/KosTransaction')

class KosTransaction {
  constructor() {

  }

  static getAll(req, res) {
    KosTransactionModel.find({})
    .then(dataKosTransaction => {
      res.send(dataKosTransaction)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static create(req, res) {
    KosTransactionModel.create(req.body)
    .then(dataKosTransaction => {
      res.send(dataKosTransaction)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static singleId(req, res) {
    KosTransactionModel.findOne({ _id: req.params.KosTransactionId })
    .then(dataKosTransaction => {
      res.send(dataKosTransaction)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static update(req, res) {
    KosTransactionModel.findOneAndUpdate({ _id: req.params.KosTransactionId }, req.body,
    { new: true })
    .then(dataKosTransaction => {
      res.send(dataKosTransaction)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static delete(req, res) {
    KosTransactionModel.findOneAndRemove({ _id: req.params.KosTransactionId })
    .then(dataKosTransaction => {
      res.send(dataKosTransaction)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = KosTransaction;
