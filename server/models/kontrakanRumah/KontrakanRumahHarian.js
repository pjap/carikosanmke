console.log('models KONTRAKAN RUMAH HARIAN\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let kontrakanRumahHarianSchema = new Schema({
  kontrakanRumahId: {
      type: Schema.Types.ObjectId,
      ref: 'kontrakanRumah',
      requried: true
  },
  kamarRumahId: {
      type: Schema.Types.ObjectId,
      ref:'kamarRumah',
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
}, { timestamps: true })

let kontrakanRumahHarian = mongoose.model('kontrakanRumahHarian', kontrakanRumahHarianSchema)

module.exports = kontrakanRumahHarian;
