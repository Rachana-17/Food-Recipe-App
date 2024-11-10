import { Router } from "express";
const router = Router();
import LoginController from "../controllers/LoginController.js";

router.post("/login", LoginController);

export default router;
