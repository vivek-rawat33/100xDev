const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
app.get("/todo ", (req, res) => {
  res.json({
    msg: "Welcome",
  });
});
app.post("/todos", (req, res) => {});

app.put("/completed", (req, res) => {});
app.listen(PORT);
