console.log('models MAINTENANCE KONTRAKAN RUMAH\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let maintenanceKontrakanRumahSchema = new Schema({
  barangKontrakanRumah: {
    type: Schema.Types.ObjectId,
    ref: 'barangKontrakanRumah',
    required: true
  },
  kontrakanRumahId: {
    type: Schema.Types.ObjectId,
    ref: 'kontrakanRumah',
    required: true
  },
  tanggalPeriksa: { type: Date, required: true },
  status: { type: Boolean, required: true },
  keterangan: { type: String }
}, { timestamps: true })

let maintenanceKontrakanRumah = mongoose.model('maintenanceKontrakanRumah', maintenanceKontrakanRumahSchema)

module.exports = maintenanceKontrakanRumah;
