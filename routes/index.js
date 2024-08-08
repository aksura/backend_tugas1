const express = require('express');
const books = require("../data/books.json");
const router = express.Router();

router.get("/books", (req, res) => {
    res.send(books);
});

router.get("/ejs/books", (req, res) => {
    res.render('books', { books });
});

router.get("/books/:id", (req, res) => {
    const { id } = req.params; // route parameter
    const book = books.find((item) => item.id === Number(id));

    if (book) {
        res.json(book); // Send the book object as a JSON response
    } else {
        res.status(404).send('Book not found'); // Handle the case where the book is not found
    }
});


module.exports = router;