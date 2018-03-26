console.log('models BARANG KONTRAKAN RUMAH');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let barangKontrakanRumahSchema = new Schema({
  kontrakanRumahId : {
    type: Schema.Types.ObjectId,
    ref: 'kontrakanRumah',
    required: true
  },
  name: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  tanggalBuang: { type: Date },
}, { timestamps: true })

let barangKontrakanRumah = mongoose.model('barangKontrakanRumah', barangKontrakanRumahSchema)

module.exports = barangKontrakanRumah;
