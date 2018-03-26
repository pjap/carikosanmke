console.log('models KONTRAKAN PETAK TRANSACTION\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let kontrakanPetakTransactionSchema = new Schema({
  penyewa: {
    type: Schema.Types.ObjectId,
    ref: 'penyewa',
    required: true
  },
  kamarPetak: {
    type: Schema.Types.ObjectId,
    ref: 'kamarPetak',
    required: true
  },
  kontrakanPetak: {
    type: Schema.Types.ObjectId,
    ref: 'kontrakanPetak',
    required: true
  },
  bulan: { type: Number, required: true, min: 1, max: 12 },
  tahun: { type: Number, required: true, min: 2018 }
}, { timestamps: true })

let kontrakanPetakTransaction = mongoose.model('kontrakanPetakTransaction', kontrakanPetakTransactionSchema)

module.exports = kontrakanPetakTransaction;
