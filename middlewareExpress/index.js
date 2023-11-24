const express = require("express");

const app = express();
const PORT = 3000;

const myMiddleware = (req, res, next) => {
  console.log("Middleware");
  req.currentTime = new Date(Date.now());
  next();
};

app.use(myMiddleware);

app.use((req, res, next) => {
  res.send("404 not found");
});

app.use((err, req, res, next) => {
  res.status(404).send("404 not found");
});

app.get("/", (req, res) => {
  console.log(req.currentTime);
  res.send("Home route");
});

app.get("/about", (req, res) => {
  console.log(req.currentTime);
  res.send("Home route");
});

app.listen(PORT, () => {
  console.log(`Server is running a at http://localhost:${PORT}`);
});
