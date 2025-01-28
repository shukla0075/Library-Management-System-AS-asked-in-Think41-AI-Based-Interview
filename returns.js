const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const Member = require('../models/member');

// Return a book from a member
router.post('/return', async (req, res) => {
  const { memberId, bookId } = req.body;

  try {
    // Find the member
    const member = await Member.findById(memberId);
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }

    // Check if the member has borrowed any books
    if (member.borrowedBooks <= 0) {
      return res.status(400).json({ message: 'Member has no borrowed books to return' });
    }

    // Find the book
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    // Check if the book is already available
    if (book.isAvailable) {
      return res.status(400).json({ message: 'Book is already available' });
    }

    // Update the book and member records
    book.isAvailable = true;
    await book.save();

    member.borrowedBooks -= 1;
    await member.save();

    res.status(200).json({ message: 'Book successfully returned' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;