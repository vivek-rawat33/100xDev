const JWT_SECRET = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(403).json({ msg: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.userId) {
      req.userId = decoded.userId;
      next();
    } else {
      return res.status(403).json({ msg: "Invalid token" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(403).json({ msg: "Token verification failed" });
  }
};

module.exports = {
  authMiddleware,
};
