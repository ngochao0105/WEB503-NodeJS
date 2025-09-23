import { Router } from "express";

const postRouter = Router();

postRouter.get("/", (req, res) => {
  res.send("Post");
});

// endpoint: api/posts/greet
postRouter.get("/detail/:id", (req, res) => {
  res.send("Post greet");
});

export default postRouter;