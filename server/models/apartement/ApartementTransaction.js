console.log('models APARTEMENT TRANSACTION\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let apartementTransactionSchema = new Schema({
  penyewa: {
    type: Schema.Types.ObjectId,
    ref: 'penyewa',
    required: true
  },
  studio: {
    type: Schema.Types.ObjectId,
    ref: 'studio',
    required: true
  },
  apartement: {
    type: Schema.Types.ObjectId,
    ref: 'apartement',
    required: true
  },
  bulan: { type: Number, required: true, min: 1, max: 12 },
  tahun: { type: Number, required: true, min:2018 }
}, { timestamps: true })

let apartementTransaction = mongoose.model('apartementTransaction', apartementTransactionSchema)

module.exports = apartementTransaction;
