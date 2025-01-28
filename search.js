const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Search for books by title or author
router.get('/books', async (req, res) => {
  const { title, author } = req.query;

  try {
    // Build the search query
    const query = {};
    if (title) {
      query.title = new RegExp(title, 'i'); // Case-insensitive search
    }
    if (author) {
      query.author = new RegExp(author, 'i'); // Case-insensitive search
    }

    // Find books that match the query
    const books = await Book.find(query);
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;