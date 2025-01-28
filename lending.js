const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const Member = require('../models/member');

// Lend a book to a member
router.post('/lend', async (req, res) => {
  const { memberId, bookId } = req.body;

  try {
    // Find the member
    const member = await Member.findById(memberId);
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }

    // Check if the member can borrow more books
    if (member.borrowedBooks >= 2) {
      return res.status(400).json({ message: 'Member has already borrowed the maximum number of books' });
    }

    // Find the book
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    // Check if the book is available
    if (!book.isAvailable) {
      return res.status(400).json({ message: 'Book is not available' });
    }

    // Update the book and member records
    book.isAvailable = false;
    await book.save();

    member.borrowedBooks += 1;
    await member.save();

    res.status(200).json({ message: 'Book successfully lent to member' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;