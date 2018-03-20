console.log('models PENGURUS\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let pengurusSchema = new Schema({
  pengurusNama : { type: String, required: true },
  pengurusKTP: { type: String, required: true },
  pengurusEmail: { type: String, required: true }
}, { timestamps: true })

let pengurus: mongoose.model('pengurus', pengurusSchema)

module.exports = pengurus;
