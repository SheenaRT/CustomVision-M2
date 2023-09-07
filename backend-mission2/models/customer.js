const mongoose = require('mongoose');



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


module.exports = mongoose.model('Cars', carSchema);
