const express = require("express");
const userRouter = require("./routes/users.route");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "recourse not found",
  });
});

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
