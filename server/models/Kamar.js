console.log('models KAMAR\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let kamarSchema = new Schema({
  kosanId: { // populate address from kosan
      type: Schema.Types.ObjectId,
      ref: 'kosan'
  },
  name: { type: String, unique: true, required: true },
  fotoKamar: { type: String },
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

let kamar = mongoose.model('kamar', kamarSchema)

module.exports = kamar;
