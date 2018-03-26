console.log('models PROMO KAMAR\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let promoKamarSchema = new Schema({
  mitraId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  },
  kosanId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'kosan'
  },
  tanggalAwalPromo: { typ: Date },
  tanggalAkhirPromo: { type: Date },
  jenisPromo: { type: String , required: true }
}, { timestamps: true })

let promoKamar = mongoose.model('promoKamar', promoKamarSchema)

module.exports = promoKamar;
