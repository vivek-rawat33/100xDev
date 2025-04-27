const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const router = express.Router();
const JWT_SECRET = require("../config");
const { authMiddleware } = require("../middleware");
const { User, Account } = require("../db");
router.use(express.json());

function userValidator({ firstName, lastName, password, userName }) {
  const userSchema = zod.object({
    firstName: zod.string(),
    lastName: zod.string(),
    userName: zod.string().email(),
    password: zod.coerce.string(),
  });
  const response = userSchema.safeParse({
    firstName,
    lastName,
    userName,
    password,
  });
  return response;
}

router.post("/signup", async (req, res) => {
  const { userName } = req.body;
  const response = userValidator(req.body);
  if (!response.success) {
    return res.status(400).json({
      msg: "wrong credentials",
    });
  }
  const userExists = await User.findOne({ userName: userName });
  if (userExists) {
    return res.status(409).json({
      msg: "User already exists",
    });
  }
  const user = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    userName: req.body.userName,
  });
  const userId = user._id;

  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
  });
  const token = jwt.sign(
    {
      userId: user._id,
    },
    JWT_SECRET
  );
  res.json({
    msg: "user created",
    token: token,
  });
});

router.post("/signin", async (req, res) => {
  const response = userValidator(req.body);
  if (!response.success) {
    return res.status(400).json({
      msg: "wrong credentials",
    });
  }
  const { password, userName } = req.body;
  const userExists = await User.findOne({ userName, password });
  if (!userExists) {
    return res.status(404).json({
      msg: "User not found",
    });
  }
  const token = jwt.sign(
    {
      userId: userExists._id,
    },
    JWT_SECRET
  );
  res.json({
    msg: "signin",
    token: token,
  });
});

const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});
router.put("/", authMiddleware, async (req, res) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      msg: "Error while updating information",
    });
  }
  await users.updateOne(req.body, {
    id: req.userId,
  });

  res.json({
    msg: "updated successfully",
  });
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.userName,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
