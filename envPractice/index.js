require("dotenv").config();
const express = require("express");

const app = express();
const { PORT } = process.env;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
