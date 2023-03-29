const express = require("express");
const app = express();
const product = require('./tour-product')
app.get("/api/tour", (req, res) => {
  res.json(product);
});
app.listen(5000, () => console.log("server is on port 5000"));
