const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Salom, bu asosiy sahifa");
});

app.get("/api/books", (req, res) => {
  res.send(["rich dad, poor dad", "code complete", "how to win friends and influence people"]);
});

app.get("/api/books/:id", (req, res) => {
    res.send(req.params.id);
});

app.get("/api/articles/:year/:month", (req, res) => {
    res.send(req.query);
});

app.post("/api/books", (req, res) => {
  const book = {
    id: books.length + 1,
    name: req.body.name
  };
  books.push(book);

  res.status(201).send(book);

})
// read the port from the environment variable
const port = process.env.PORT || 5000;

// Listening the port
app.listen(5000, () => {
  console.log(`${port}-portni eshitishni boshladim...`);
});
