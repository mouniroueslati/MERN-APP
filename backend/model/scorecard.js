const mongoose = require('mongoose');


const scoreCardSchema = new mongoose.Schema({
    month: { type: String, required: true }, // Mois auquel se rapportent les données (par exemple, "Janvier 2023")
  data: [
    {
      col1: String,
      col2: Number,
      col3: Number,
      col4: Number,
      col5: Number,
      col6: Number,
      col7: Number,
      col8: Number,
      col9: Number,
    },
  ],
});

module.exports = mongoose.model('SCORECARD', scoreCardSchema);

