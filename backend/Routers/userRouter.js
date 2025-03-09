import express from "express";
import {
  loginControllers,
  registerControllers,
  setAvatarController,
  allUsers,
} from "../controllers/userController.js";
import { authenticate } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.route("/register").post(registerControllers);

router.route("/login").post(loginControllers);

router.route("/setAvatar/:id").post(authenticate, setAvatarController);

router.route("/profile").get(authenticate, allUsers);

export default router;
