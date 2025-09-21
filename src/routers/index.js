import { Router } from "express";
import postRouter from "./post";

const router = Router();


router.get("/", (req, res) => {
  res.send("Hello, chao cac ban");
});

router.use("/",(req,res)=>{
    res.send("/posts",postRouter)
})


export default router;