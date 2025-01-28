require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const membersRouter = require('./routes/members');
const booksRouter = require('./routes/books');
const lendingRouter = require('./routes/lending');
const returnsRouter = require('./routes/returns');
const searchRouter = require('./routes/search'); // Import the search router

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Could not connect to MongoDB Atlas', err));

// Use the routers
app.use('/api/members', membersRouter);
app.use('/api/books', booksRouter);
app.use('/api/lending', lendingRouter);
app.use('/api/returns', returnsRouter);
app.use('/api/search', searchRouter); // Use the search router

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});