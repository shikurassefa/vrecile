const express = require("express");
const app = express();
const product = require('./tour-product')
app.get("/api/tour", (req, res) => {
  res.json(product);
});
const port = process.env.PORT || 5000
app.listen(port, () => console.log("server is on port 5000"));
