console.log('models MAINTENANCE KAMAR\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let maintenanceKamarSchema = new Schema({
  barangKamarId: {
    type: Schema.Types.ObjectId,
    ref: 'barangKamar',
    required: true,
  },
  kamarId: {
    type: Schema.Types.ObjectId,
    ref: 'kamar',
    required: true,
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

let maintenanceKamar = mongoose.model('maintenanceKamar', maintenanceKamarSchema)

module.exports = maintenanceKamar;
