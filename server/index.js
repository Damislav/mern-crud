const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
dotenv.config();

// ¸middleware
app.use(cors());
morgan("tiny");
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api", require("./routes/todoRoutes"));

// app.use("/api/users", userRoute);
app.listen(5000, () => {
  console.log("Backend is running.");
});
