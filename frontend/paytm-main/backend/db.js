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

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    require: true,
  },
});
const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = { User, Account };
