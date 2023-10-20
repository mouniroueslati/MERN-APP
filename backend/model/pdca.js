const mongoose = require('mongoose');


const pdcaSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  probleme: { type: String, required: true },
  responsable: { type: String, required: true },
  action: { type: String, required: true },
  echeance: { type: Date, required: true },
  avancement: { type: Number, required: true },
  statut: { type: String, required: true },
});



module.exports = mongoose.model('PDCA', pdcaSchema);