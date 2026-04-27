const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/blogApp")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

const blogRoutes = require("./routes/blogRoutes");

app.use("/api/blogs", blogRoutes);
