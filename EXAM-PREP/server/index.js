const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require("./Routes/authRoutes");
const app = express();

// 1) middlewares
app.use(cors());
app.use(express.json());

//2) Routes

app.use("/api/auth", authRouter);

// 3) MongoDb connect

mongoose
  .connect("mongodb://localhost:27017/elearning")
  .then(() => console.log("connected DB"))
  .catch((error) => console.log("Failed to connect DB", error));

//4) Global Error Handler

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).json({
    status : err.statusCode,
    message: err.message,
  })

});

// 5) Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is Running on ${PORT}`);
});
