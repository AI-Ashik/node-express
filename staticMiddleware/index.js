const express = require("express");

const app = express();
const port = 3000;

// it indicates that we will use these file from public folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
