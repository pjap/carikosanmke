console.log('models KAMAR PETAK\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let kamarPetakSchema = new Schema({
  kontrakanPetakId: { // populate address from kosan
      type: Schema.Types.ObjectId,
      ref: 'kontrakanPetak',
      required: true
  },
  name: { type: String, unique: true, required: true },
  fotoKamarPetak: { type: String },
  luas: { type: String},
  price: { type: Number, required: true },
  available: {type:Boolean, default:true},
  promo: [],
  category: [], // AC, kamar mandi dalam, kamar mandi luar,
  penyewa: {
      type: Schema.Types.ObjectId,
      ref: 'penyewa',
      required: true
  }
  // penyewaNama: {type:String},
  // penyewaKTP: {type:String},
  // checkIn: {type: Date},
  // checkOut: {type: Date},
}, { timestamps: true })

let kamarPetak = mongoose.model('kamarPetak', kamarPetakSchema)

module.exports = kamarRumah;
