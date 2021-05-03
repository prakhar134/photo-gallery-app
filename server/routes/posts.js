import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likedPost,
} from "../controllers/posts.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", authMiddleware, createPost);
router.patch("/:id", authMiddleware, updatePost);
router.delete("/:id", authMiddleware, deletePost);
router.patch("/:id/likedPost", authMiddleware, likedPost);

export default router;
