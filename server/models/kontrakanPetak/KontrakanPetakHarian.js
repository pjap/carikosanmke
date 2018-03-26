console.log('models KONTRAKAN PETAK HARIAN\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let kontrakanPetakHarianSchema = new Schema({
  kontrakanPetakId: {
      type: Schema.Types.ObjectId,
      ref: 'kontrakanPetak',
      requried: true
  },
  kamarPetakId: {
      type: Schema.Types.ObjectId,
      ref:'kamarPetak',
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

let kontrakanPetakHarian = mongoose.model('kontrakanPetakHarian', kontrakanPetakHarianSchema)

module.exports = kontrakanPetakHarian;
