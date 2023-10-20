const mongoose = require('mongoose');

const periodSchema = new mongoose.Schema({
  month: { type: Number },
  year: { type: Number },
});

module.exports = mongoose.model('Period', periodSchema);