const mongoose = require('mongoose');

const kpisSchema = new mongoose.Schema({
  description: { type: String, required: true },
  result: { type: Number, required: true },
  budget: { type: Number, required: true },
});

module.exports = mongoose.model('KPI', kpisSchema);