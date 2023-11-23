const express = require("express");

const app = express();
const port = 3000;

// this is javascript regular expression
app.get("/products/:id([0-9]{3})", (req, res) => {
  res.send(`<h2>ID = ${req.params.id}</h2>`);
});

// this is javascript regular expression
app.get("/products/:title([a-zA-Z0-9]+)", (req, res) => {
  res.send(`<h2>Title = ${req.params.title}</h2>`);
});

// if all condition not works
app.use("*", (req, res) => {
  res.status(404).send(`<h2>Not a valid route</h2>`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
