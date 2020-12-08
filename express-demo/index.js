const express = require("express");
const app = express();
const books = [
  { id: 1, title: "Code Complete" },
  { id: 2, title: "Sell yourself" },
  { id: 3, title: "how win friends and influence people" },
  { id: 4, title: "Rich dad, poor dad" },
];

app.get("/api/books", (req, res) => {
  res.send(books);
});

app.get("/api/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) res.status(404).send("Book not found");

  res.send(book);
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`${port}-portni eshitishni boshladim...`);
});
