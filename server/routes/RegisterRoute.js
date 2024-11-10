import { Router } from "express";
const router = Router();
import RegisterController from "../controllers/RegisterController.js";

router.post("/register", RegisterController);

export default router;
