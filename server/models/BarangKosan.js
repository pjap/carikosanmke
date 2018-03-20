console.log('models BARANG KOSAN\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let barangKosanSchema = new Schema({
  kosanId : {
    type: Schema.Types.ObjectId,
    ref: 'kosan',
    required: true
  },
  name: { type: String, required:true },
  isActive: { type: Boolean, required:true },
  tanggalBuang: { type:Date }
}, { timestamps: true })

let barangKosan = mongoose.model('barangKosan', barangKosanSchema)

module.exports = barangKosan;
