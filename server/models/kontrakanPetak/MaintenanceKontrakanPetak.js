console.log('models MAINTENANCE KONTRAKAN PETAK\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let maintenanceKontrakanPetakSchema = new Schema({
  barangKontrakanPetak: {
    type: Schema.Types.ObjectId,
    ref: 'barangKontrakanPetak',
    required: true
  },
  kontrakanPetakId: {
    type: Schema.Types.ObjectId,
    ref: 'kontrakanPetak',
    required: true
  },
  tanggalPeriksa: { type: Date, required: true },
  status: { type: Boolean, required: true },
  keterangan: { type: String }
}, { timestamps: true })

let maintenanceKontrakanPetak = mongoose.model('maintenanceKontrakanPetak', maintenanceKontrakanPetakSchema)

module.exports = maintenanceKontrakanPetak;
