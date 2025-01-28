const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: Date },
  genre: { type: String },
  isAvailable: { type: Boolean, default: true } // Track availability
});

module.exports = mongoose.model('Book', bookSchema);