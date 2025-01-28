const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  joinedDate: { type: Date, default: Date.now },
  borrowedBooks: { type: Number, default: 0 } // Track borrowed books count
});

module.exports = mongoose.model('Member', memberSchema);