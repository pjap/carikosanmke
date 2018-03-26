console.log('models KONTRAKAN RUMAH TRANSACTION\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let kontrakanRumahTransactionSchema = new Schema({
  penyewa: {
    type: Schema.Types.ObjectId,
    ref: 'penyewa',
    required: true
  },
  kamarRumah: {
    type: Schema.Types.ObjectId,
    ref: 'kamarRumah',
    required: true
  },
  kontrakanRumah: {
    type: Schema.Types.ObjectId,
    ref: 'kontrakanRumah',
    required: true
  },
  bulan: { type: Number, required: true, min: 1, max: 12 },
  tahun: { type: Number, required: true, min: 2018 }
}, { timestamps: true })

let kontrakanRumahTransaction = mongoose.model('kontrakanRumahTransaction', kontrakanRumahTransactionSchema)

module.exports = kontrakanRumahTransaction;
