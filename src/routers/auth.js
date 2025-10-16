import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.js";

const authRouter = Router();

// POST api/authors
authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);

export default authRouter;