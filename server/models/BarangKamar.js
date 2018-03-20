console.log('models BARANG KAMAR\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let barangKamarSchema = new Schema ({
  kamarId: {
    type: Schema.Types.ObjectId,
    ref: 'kamar',
    required: true
  }
}, { timestamps: true })

let barangKamarModel = mongoose.model('barangKamar', barangKamarSchema)

module.exports = barangKamarModel;
