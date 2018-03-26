console.log('controller MAINTENANCE APARTEMENT\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let maintenanceApartementSchema = new Schema({
  barangApartementId: {
      type: Schema.Types.ObjectId,
      ref: 'barangApartement',
      required: true
  },
  apartementId: {
      type: Schema.Types.ObjectId,
      ref: 'apartement',
      required: true
  },
  tanggalPeriksa: { type: Date, required: true },
  status: { type: Boolean, required: true },
  keterangan: { type: String }
}, { timestamps: true })

let maintenanceApartement = mongoose.model('maintenanceApartement', maintenanceApartementSchema)

module.exports = maintenanceApartement;
