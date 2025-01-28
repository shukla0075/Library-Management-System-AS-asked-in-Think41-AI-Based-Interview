Book Lending Club API

Overview

The Book Lending Club API is a RESTful service designed to manage members, books, and lending records in a book lending club. It provides functionality for adding and retrieving members and books, lending and returning books, and searching for books by title or author.

Features

Member Management: Add and retrieve member details.
Book Management: Add new books and search for books by title or author.
Lending Management: Lend books to members, ensuring availability and borrowing limits.
Return Management: Return books and update availability and borrowing counts.
Technologies Used

Node.js: JavaScript runtime for building the server-side application.
Express: Web framework for building RESTful APIs.
MongoDB: NoSQL database for storing data.
Mongoose: ODM for MongoDB to manage data models.
dotenv: Module to load environment variables from a .env file.
Prerequisites

Node.js: Ensure you have Node.js installed. You can download it from nodejs.org.
MongoDB Atlas: Set up a MongoDB Atlas account and create a cluster.
Setup Instructions

Clone the Repository:

BASH

1git clone https://github.com/yourusername/book-lending-club.git
2cd book-lending-club
Install Dependencies:

BASH

1npm install
Configure Environment Variables:

Create a .env file in the root directory.
Add the following environment variables:
PLAINTEXT

1PORT=3000
2MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/bookClub?retryWrites=true&w=majority
Start the Server:

BASH

1node app.js
Access the API:

The API will be running at http://localhost:3000.
API Documentation

Members
Add Member: POST /api/members

Request Body: { "name": "John Doe", "email": "john.doe@example.com" }
Response: 201 Created
Get Member by ID: GET /api/members/:id

Response: 200 OK with member details
Books
Add Book: POST /api/books

Request Body: { "title": "The Great Gatsby", "author": "F. Scott Fitzgerald" }
Response: 201 Created
Search Books: GET /api/search/books

Query Parameters: title, author
Example: /api/search/books?title=Gatsby
Response: 200 OK with list of books
Lending
Lend Book: POST /api/lending/lend
Request Body: { "memberId": "<member_id>", "bookId": "<book_id>" }
Response: 200 OK or error message
Returns
Return Book: POST /api/returns/return
Request Body: { "memberId": "<member_id>", "bookId": "<book_id>" }
Response: 200 OK or error message
Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Contact

For questions or support, please contact your-email@example.com.

This README provides a comprehensive overview of your project, including setup instructions, API documentation, and contribution guidelines. You can customize it further to suit your project's specific needs and add any additional sections as necessary.
