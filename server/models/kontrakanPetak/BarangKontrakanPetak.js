console.log('models BARANG KONTRAKAN PETAK');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let barangKontrakanPetakSchema = new Schema({
  kontrakanPetakId : {
    type: Schema.Types.ObjectId,
    ref: 'kontrakanPetak',
    required: true
  },
  name: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  tanggalBuang: { type: Date },
}, { timestamps: true })

let barangKontrakanPetak = mongoose.model('barangKontrakanRumah', barangKontrakanPetakSchema)

module.exports = barangKontrakanPetak;
