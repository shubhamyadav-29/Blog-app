const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

// GET all blogs
router.get("/", async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

// POST create blog
router.post("/", async (req, res) => {
  const blog = new Blog(req.body);
  const saved = await blog.save();
  res.json(saved);
});

// GET single blog
router.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.json(blog);
});

module.exports = router;