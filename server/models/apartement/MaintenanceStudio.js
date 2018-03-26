console.log('models MAINTENANCE STUDIO\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let maintenanceStudioSchema = new Schema({
  barangStudioId: {
    type: Schema.Types.ObjectId,
    ref: 'barangStudio',
    required: true,
  },
  studioId: {
    type: Schema.Types.ObjectId,
    ref: 'studio',
    required: true,
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

let maintenanceStudio = mongoose.model('maintenanceStudio', maintenanceStudioSchema)

module.exports = maintenanceStudio;
