console.log('models KOS TRANSACTION\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let kosTransactionSchema = new Schema({
  penyewa: {
    type: Schema.Types.ObjectId,
    ref: 'penyewa',
    required: true
  },
  kamar: {
    type: Schema.Types.ObjectId,
    ref: 'kamar',
    required: true
  },
  kosan: {
    type: Schema.Types.ObjectId,
    ref: 'kosan',
    required: true
  },
  bulan: { type: Number, required: true, min: 1, max: 12 },
  tahun: { type: Number, required: true, min:2018 }
}, { timestamps: true })

let kosTransaction = mongoose.model('kosTransaction', kosTransactionSchema)

module.exports = kosTransaction;
