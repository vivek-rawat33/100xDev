const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://vivek_01:vivekDB@cluster0.ghobujw.mongodb.net/paytm-users"
);
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 10,
  },
  lastName: {
    type: String, 
    required: true,
    minLength: 2,
    maxLength: 10,
  },
  password: String,
  userName: {
    required: true,
    type: String,
    minLength: 4,
    maxLength: 15,
    unique: true,
    upperCase: true,
    lowerCase: true,
    trim: true,
  },
});

const users = mongoose.model("users", userSchema);

module.exports = users;
