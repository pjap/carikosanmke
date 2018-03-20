console.log('models MITRA\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let mitraSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  passwordConf: { type: String, required: true },
  alamat: { type: String, required: true },
  fullname: { type: String, required: true },
  kuasaKTP: { type: String },
  active: false,
  email: { type: String, required: true },
  phone: { type: String, required: true },
  listKosan: [
    {
      type: Schema.Types.ObjectId,
      ref: 'kosan'
    }
  ]
}, { timestamps: true })

let mitra = mongoose.model('mitra', mitraSchema);

module.exports = mitra;
