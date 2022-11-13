import express from "express";
import {
  loginController,
  logoutController,
  refreshTokenController,
} from "../controllers/auth/index.js";

const router = express.Router();

router.post("/login", loginController);
router.post("/getNewAccessToken", refreshTokenController);
router.delete("/logout", logoutController);

export default router;
