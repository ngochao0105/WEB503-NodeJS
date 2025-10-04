import Post from "../models/Post.js";

// Lấy tất cả posts
export async function getPosts(req, res) {
  try {
    const posts = await Post.find();

    if(posts.length === 0) return res.status(200).json({
      message: "Hiện tại không có bài viết nào"
    })
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Lấy 1 post theo id
export async function getPostById(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Thêm mới post
export async function addPost(req, res) {
  try {
  const {title, content} = req.body;
    const newPost = await Post.create(req.body);
    return res.status(201).json(newPost);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

// Cập nhật post
export async function updatePost(req, res) {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // trả về document đã cập nhật
    );
    if (!updatedPost) return res.status(404).json({ error: "Post not found" });
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Xóa post
export async function deletePost(req, res) {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) return res.status(404).json({ error: "Post not found" });
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}