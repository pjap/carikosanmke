console.log('models APARTEMENT HARIAN\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let apartementHarianSchema = new Schema({
  apartementId: {
      type: Schema.Types.ObjectId,
      ref: 'apartement',
      requried: true
  },
  studioId: {
      type: Schema.Types.ObjectId,
      ref:'studio',
      requried:true
  },
  penyewaId: {
      type: Schema.Types.ObjectId,
      ref: 'penyewa',
      requried: true
  },
  harga: { type: Number, required:true },
  tanggalBayar: { type: Date, required:true },
  JenisBayar: { type: String, default:'cash' }
}, { timestamps: true})

let apartementHarian = mongoose.model('apartementHarian', apartementHarianSchema)

module.exports = apartementHarian;

// B0rg_cub3
