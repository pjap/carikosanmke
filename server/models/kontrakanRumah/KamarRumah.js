console.log('models KAMAR RUMAH\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let kamarRumahSchema = new Schema({
  kontrakanRumahId: { // populate address from kosan
      type: Schema.Types.ObjectId,
      ref: 'kontrakanRumah',
      required: true
  },
  name: { type: String, unique: true, required: true },
  fotoKamarRumah: { type: String },
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

let kamarRumah = mongoose.model('kamarRumah', kamarRumahSchema)

module.exports = kamarRumah;
