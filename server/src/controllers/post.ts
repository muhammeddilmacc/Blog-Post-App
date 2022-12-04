import { NextFunction, Request, Response } from "express";
import Post from "../models/Post";
import mongoose from "mongoose";

const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await Post.find();
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts,
    });
  } catch (error) {
    res.status(500).json({
      message: "Fetching posts failed!",
    });
  }
};

const getPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Post not found!" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Fetching post failed!",
    });
  }
};

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  const { title, content, author, createdAt, updatedAt } = req.body;
  const post = new Post({
    _id: new mongoose.Types.ObjectId(),
    title,
    content,
    author,
    createdAt,
    updatedAt,
  });
  try {
    await post.save();
    res.status(201).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    res.status(500).json({
      message: "Creating a post failed!",
    });
  }
};

export default {
  getPosts,
  getPost,
  createPost,
};
