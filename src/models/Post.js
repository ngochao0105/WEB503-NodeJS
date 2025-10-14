import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Tiêu đề bài viết là bắt buộc"],
      trim: true,
      maxlength: [200, "Tiêu đề không được vượt quá 200 ký tự"],
    },
    content: {
      type: String,
      required: [true, "Nội dung bài viết là bắt buộc"],
    },
    author: {
      type: String,
      default: "Ẩn danh",
      trim: true,
    },
    category: {
      type: String,
      enum: ["tin tức", "thủ thuật", "đánh giá", "khác"],
      default: "khác",
    },
    tags: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },
    views: {
      type: Number,
      default: 0,
      min: [0, "Số lượt xem không được âm"],
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false } // ẩn __v, thêm createdAt & updatedAt
);

const Post = mongoose.model("Post", postSchema);
export default Post;
