import { getUserProfile } from "../controllers/user.controller.js";
import express from "express";

const router = express.Router();
router.get("/:id", getUserProfile);
export default router;
