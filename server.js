const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.resolve(__dirname, "/build")));
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});

console.log(process.env);
app.use("/api", (req, res) => {
  res.send("hello world!");
});
