console.log('models STUDIO KAMAR\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studioSchema = new Schema({
  apartementId: {
    type: Schema.Types.ObjectId,
    ref: 'apartement'
  },
  name: { type: String, unique: true, required: true },
  noStudio: { type: String, required: true }
  fotoStudio: { type: String },
  luas: { type: String },
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

let studio = mongoose.model('studio', studioSchema)

module.exports = studio;
