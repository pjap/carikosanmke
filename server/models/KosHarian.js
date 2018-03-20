console.log('models KOS HARIAN\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let kosHarianSchema = new Schema({
  kosanId: {
      type: Schema.Types.ObjectId,
      ref: 'kosan',
      requried: true
  },
  kamarId: {
      type: Schema.Types.ObjectId,
      ref:'kamar',
      requried:true
  },
  penyewaId: {
      type: Schema.Types.ObjectId,
      ref: 'penyewa',
      requried: true
  },
  harga: { type: Number, required:true },
  tanggalBayar: { type:Date,required:true },
  JenisBayar: { type:String, default:'cash' }
}, { timestamps: true})

let kosHarian = mongoose.model('kosHarian', kosHarianSchema)

module.exports = kosHarian;
