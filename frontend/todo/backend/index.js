const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 3000;
app.use(bodyParser.json());
app.use(cors());
app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      error: "Invalid payload",
    });
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({ msg: "Todo created successfully" });
});
app.get("/todos", async (req, res) => {
  const response = await todo.find({});
  res.json({
    response,
  });
});

app.put("/completed", async (req, res) => {
  const userPayload = req.body;
  const parsedPayload = userPayload.safeParse(userPayload);
  if (!parsedPayload) {
    res.status(411).json({
      error: "Invalid payload",
    });
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res,
    json({
      msg: "Todo marked as completed",
    });
});
app.listen(PORT);
