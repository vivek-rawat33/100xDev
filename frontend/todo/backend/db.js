const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://vivek_01:vivekDB@cluster0.ghobujw.mongodb.net/todo-app"
);

const TodoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", TodoSchema);

module.exports = {
  todo,
};
