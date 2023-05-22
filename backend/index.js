const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// End-point to handle query parameters
app.get("/endpoint", (req, res) => {
  const { name, age } = req.query;
  res.send({ name: name, age: age });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
