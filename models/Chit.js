const { Schema, model, Types } = require('mongoose');

const chitSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

module.exports = model('Chit', chitSchema);
