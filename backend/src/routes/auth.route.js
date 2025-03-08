import express from "express"
import { checkAuth } from "../controllers/auth.controller.js";
import { login, logout, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js"; 
import { updateProfile } from "../controllers/auth.controller.js";

const router = express.Router();
 
router.post("/signup",signup)
router.post("/login",login)
router.post("/logout", logout)
router.put("/update-profile", protectRoute, updateProfile)
router.get("/check", protectRoute, checkAuth)


export default router;
// AyawRc8HuHtpYdXq
// 37