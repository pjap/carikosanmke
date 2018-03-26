console.log('models Apartement\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let apartementSchema = new Schema({
  mitraId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  },
  name: { type: String, unique: true, required: true },
  fullAddress: { type: String, required: true },
  RT: { type: String, required: true},
  RW: { type: String, required: true},
  kelurahan: { type: String, required: true },
  kecamatan: { type: String, required: true },
  kotaDesa: { type: String, required: true },
  provinsi: { type: String, required: true },
  kodepos: { type: String, required: true },
  pengurus: {
      type: Schema.Types.ObjectId,
      ref:'pengurus',
      required: true
  },
  // pengurusNama: { type: String, required: true},
  // pengurusEmail: { type: String, required: true},
  // pengurusKTP: { type: String, required: true},
  statusKepemilikan: {type:String},
  fasilitas: [],
  price: { type: Number, required: true },
  available: {type: Boolean, default:true},
  promo: [],
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

let apartement = mongoose.model('apartement', apartementSchema)

module.exports = apartement;
