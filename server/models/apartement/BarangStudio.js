console.log('models BARANG STUDIO\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let barangStudioSchema = new Schema ({
  studioId: {
    type: Schema.Types.ObjectId,
    ref: 'studio',
    required: true
  }
}, { timestamps: true })

let barangStudio = mongoose.model('barangStudio', barangStudioSchema)

module.exports = barangStudio;
