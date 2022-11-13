import express from "express";

import {
  createUserController,
  deleteUserController,
  getSingleUserController,
  updateUserController,
} from "./../controllers/users/index.js";

const router = express.Router();

router.post("/createuser", createUserController);
router.delete("/deleteuser/:id", deleteUserController);
router.get("/user/:id", getSingleUserController);
router.put("/user/:id", updateUserController);

export default router;
