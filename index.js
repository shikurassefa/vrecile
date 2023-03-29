const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.json([{ name: "abd", lastName: "adem" }]);
});
app.listen(5000, () => console.log("server is on port 5000"));
