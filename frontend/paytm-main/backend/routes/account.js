const express = require("express");
const { authMiddleware } = require("../middleware");
const { Account } = require("../db");
const { default: mongoose } = require("mongoose");
const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });

  res.json({
    balance: account.balance,
  });
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();
  session.transaction();
  const { amount, to } = req.body;
  const account = Account.findOne({
    userId: req.userId,
  }).session(session);

  if (!account || account.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({
      msg: "Insufficient balance",
    });
  }

  const toAccount = Account.findOne({
    userId: to,
  });
  if (!toAccount) {
    await session.abortTransaction();
    return res.status(404).json({
      msg: "account not found",
    });
  }

  await Account.updateOne(
    { userId: to },
    { $inc: { balance: amount } }
  ).session(session);

  await Account.updateOne(
    {
      userId: req.userId,
    },
    {
      $inc: { balance: -amount },
    }
  ).session(session);

  await session.commitTransaction();
  res.json({
    msg: "Money transfered successfully",
  });
}); 
module.exports = router;
