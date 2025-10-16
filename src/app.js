import express from "express";
// import morgan from "morgan";

import postRouter from "./routers/post.js";
// import productRouter from "./routers/prduct";
// import authorRouter from "./routers/author.js";
import mongoose from "mongoose";
import authRouter from "./routers/auth.js";

const app = express();

// Dùng morgan để log ở chế độ 'dev'
// app.use(morgan("dev"));

// Middleware tích hợp để parse JSON: req.body
app.use(express.json());
 (async () => {
 try{
  await mongoose.connect("mongodb://localhost:27017/asm1")
  console.log("Kết nối thành công database");
 }catch(error){
  console.log("Lỗi khi kết nối database", error.message);
 }
})()


app.get("/", (req, res) => {
  res.send("Hello, chao cac ban: ");
});

app.use("/api/posts", postRouter);
// app.use("api/products" , productRouter)
// app.use("/api/authors", authorRouter);
app.use("/api/auth", authRouter);

app.listen(3000, () => {
  console.log(`Server is running on port http://localhost:3000`);
});
