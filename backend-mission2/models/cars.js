const mongoose = require('mongoose');

//Cars Schema

const carSchema = mongoose.Schema({
  Make: { type: String },
  Model: { type: String },
  Year: { type: String },
  Amount: { type: String },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

//Define and export
module.exports = mongoose.model('Cars', carSchema);
