import { Router } from "express";
import postRouter from "./post";
import userRouter from "./user";
import productRouter from "./product";

const router = Router();


//   localhost":3000/?name=Teo
router.get("/", (req, res) => {
  const name = req.query?.name ;
  res.send("Hello, chao cac ban ");
});

// // gom api posts
router.use("/api/posts", postRouter);

// // gom api users
router.use("/api/users", userRouter);

// // gom api products
router.use("/api/products", productRouter);

export default router;