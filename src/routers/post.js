// import {Router} from "express";
// import {getAllProduct , getById , addProduct , updateProduct , deleteProduct } from "../controllers/product.js";

// const router = Router();

// router.get("/", getAllProduct );
// router.post("/", addProduct );
// router.get("/:id", getById );
// router.put("/:id", updateProduct );
// router.delete("/:id", deleteProduct );

// export default router;
import {Router} from "express";
import {getPosts, getPostById, addPost, updatePost, deletePost} from "../controllers/post.js";

const router = Router();

router.get("/", getPosts);
router.post("/", addPost);
router.get("/:id", getPostById);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;

