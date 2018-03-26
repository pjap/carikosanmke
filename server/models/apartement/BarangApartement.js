console.log('models BARANG APARTEMENT\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let barangApartementSchema = new Schema({
  apartementId : {
    type: Schema.Types.ObjectId,
    ref: 'apartement',
    required: true
  },
  name: { type: String, required:true },
  isActive: { type: Boolean, required:true },
  tanggalBuang: { type: Date }
}, { timestamps: true })

let barangApartement = mongoose.model('barangApartement', barangApartementSchema)

module.exports = barangApartement;
