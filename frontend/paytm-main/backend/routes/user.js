const express = require("express");
const users = require("../db");
const zod = require("zod");
const router = express.Router();
router.use(express.json());

function userValidator({ firstName, lastName, password, userName }) {
  const userSchema = zod.object({
    firstName: zod.string(),
    lastName: zod.string(),
    userName: zod.string(),
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
  const userExists = await users.findOne({ userName });
  if (userExists) {
    return res.status(409).json({
      msg: "User already exists",
    });
  }
  const user = new users({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    userName: req.body.userName,
  });
  await user.save();

  res.json({
    msg: "user created",
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
  const userExists = await users.findOne({ userName, password });
  if (!userExists) {
    return res.status(404).json({
      msg: "User not found",
    });
  }
  res.json({
    msg: "signin",
  });
});
module.exports = router;
