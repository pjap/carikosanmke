console.log('controller MAINTENANCE KOSAN\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let maintenanceKosanSchema = new Schema({
  barangKosanId: {
      type: Schema.Types.ObjectId,
      ref: 'barangKosan',
      required: true
  },
  kosanId: {
      type: Schema.Types.ObjectId,
      ref: 'kosan',
      required: true
  },
  tanggalPeriksa: { type: Date, required: true },
  status: { type: Boolean, required: true },
  keterangan: { type: String }
}, { timestamps: true })

let maintenanceKosan = mongoose.model('maintenanceKosan', maintenanceKosanSchema)

module.exports = maintenanceKosan;
