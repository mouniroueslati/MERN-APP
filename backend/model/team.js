const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  teamname: { type: String },
  teamlead: { type: String }
});

module.exports = mongoose.model('Team', teamSchema);