console.log('models PENYEWA\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let penyewaSchema = new Schema({
  penyewaNama: { type: String, required: true },
  penyewaKTP: { type: String, required: true },
  checkIn: { type: Date, required: true },
  checkOut: ( type: Date, required: true )
}, { timestamps: true })

let penyewa = mongoose.model('penyewa', penyewaSchema)

module.exports = penyewa;
