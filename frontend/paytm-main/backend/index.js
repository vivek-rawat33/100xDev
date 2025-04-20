const express = require("express");
const userRouter = require("./routes/user");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1/user", userRouter);

app.listen(3000);
